import { xml2js } from "xml-js";
import {
  createDecipheriv,
  createCipheriv,
  randomBytes,
  pbkdf2Sync
} from "crypto";
import { ITERATIONS, LOGIN, VAULT, CREATE } from "./endpoints";

interface Account {
  name: string;
  url: string;
  username: string;
  password: string;
}

export default class LastPass {
  key: Buffer;
  session: { sessionid: string; token: string };

  login = async (username: string, password: string, otp?: string) => {
    const iterations = await this.getIterations(username);
    this.key = this.getKey(username, password, iterations.toString());
    const hash = this.getHash(this.key, password);
    const body = { username, hash, iterations, ...(otp && { otp }) };
    const json: any = await this.request(LOGIN, "POST", body, {}, "js");
    if (
      !json ||
      !json.ok ||
      !json.ok._attributes ||
      !json.ok._attributes.sessionid
    ) {
      throw new Error("Bad session response.");
    } else {
      this.session = json.ok._attributes;
    }
  };

  getAccounts = async (): Promise<Array<Account>> => {
    return await this.decryptAccounts();
  };

  addAccount = async (
    username: string,
    password: string,
    url: string,
    name: string,
    otp?: string
  ) => {
    username = this.encrypt(username);
    password = this.encrypt(password);
    name = this.encrypt(name);
    if (otp) otp = this.encrypt(otp);
    url = Buffer.from(url).toString("hex");
    const body = {
      extjs: "1",
      aid: "0",
      folder: "none",
      grouping: "",
      username,
      password,
      url,
      name,
      otp
    };
    const {
      xmlresponse: {
        result: {
          _attributes: { msg }
        }
      }
    }: any = await this.request(CREATE, "POST", body, {}, "js");
    if (msg !== "accountadded")
      throw new Error("An unknown error occured while adding the record.");
  };

  private getHash = (key: Buffer, password: string): string => {
    return pbkdf2Sync(key, Buffer.from(password), 1, 32, "sha256").toString(
      "hex"
    );
  };

  private getIterations = async (email: string): Promise<number> => {
    const text = (await this.request(ITERATIONS, "POST", { email })) as string;
    return parseInt(text, 10);
  };

  private fetchAccounts = async () => {
    const {
      response: {
        accounts: { account }
      }
    }: any = await this.request(VAULT, "POST", false, {}, "js");
    return Array.isArray(account) ? account : [account];
  };

  private decryptAccounts = async (): Promise<Array<Account>> => {
    const data = await this.fetchAccounts();
    const accounts: Array<Account> = [];
    for (let i = 0; i < data.length; i++) {
      let {
        _attributes: { name, url, username },
        login: {
          _attributes: { p }
        }
      } = data[i];
      const decryptedAccount = this.decryptAccount({ name, url, username, p });
      accounts.push(decryptedAccount);
    }
    return accounts;
  };

  private decryptAccount = ({ name, p, url, username }: any): Account => {
    name = this.getField(name);
    url = this.getField(url);
    username = this.getField(username);
    p = this.getField(p);
    return { name, url, username, password: p };
  };

  private getField = (field: string) => {
    const length = field.length;
    if (length === 0) return "";
    let decrypted = "";

    if (field.slice(0, 1) === "!") {
      const [iv, payload] = field.split("|");
      if (iv && payload) {
        decrypted = this.decrypt(
          Buffer.from(payload, "base64"),
          Buffer.from(iv.slice(1), "base64")
        );
      }
    } else {
      if (field) decrypted = Buffer.from(field, "hex").toString();
    }

    return decrypted;
  };

  private decrypt = (data: Buffer, iv: Buffer) => {
    const decipher = createDecipheriv("aes-256-cbc", this.key as Buffer, iv);
    let plaintext = decipher.update(data).toString("utf8");
    plaintext += decipher.final().toString("utf8");
    return plaintext;
  };

  private encrypt = (data: string) => {
    const iv = randomBytes(16);
    const cipher = createCipheriv("aes-256-cbc", this.key as Buffer, iv);
    let cipherText = cipher.update(Buffer.from(data)).toString("base64");
    cipherText += cipher.final().toString("base64");
    return `!${iv.toString("base64")}|${cipherText}`;
  };

  private getKey = (
    username: string,
    password: string,
    iterations: string
  ): Buffer => {
    return pbkdf2Sync(
      Buffer.from(password),
      Buffer.from(username),
      parseInt(iterations),
      32,
      "sha256"
    );
  };

  private request = async (
    endpoint: string,
    method: string,
    body: any,
    headers: any = {},
    type = "text"
  ) => {
    let form: any;
    if (body) {
      form = new FormData();
      form.append("method", "cli");
      form.append("xml", "1");
      form.append("imei", "cli");
      this.session && form.append("token", this.session.token);
      Object.keys(body).map(key => {
        form.append(key, body[key]);
      });
    }
    headers = {
      ...(this.session && {
        Cookie: `PHPSESSID=${encodeURIComponent(this.session.sessionid)};`
      }),
      ...headers
    };
    const response = await fetch(endpoint, {
      method,
      referrerPolicy: "no-referrer",
      ...(body && { body: form }),
      headers
    });
    if (!response.ok) {
      throw new Error("Error requesting data.");
    }
    const xml = await response.text();
    if (type === "js") {
      return xml2js(xml, { compact: true });
    }
    return xml;
  };
}
