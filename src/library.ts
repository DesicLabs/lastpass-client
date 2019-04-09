import { xml2js } from "xml-js";
import { ITERATIONS, LOGIN, VAULT } from "./endpoints";

const { encode } = new TextEncoder();
const { decode } = new TextDecoder();

export default class LastPass {
  key: CryptoKey | undefined;
  login = async (username: string, password: string, otp?: number) => {
    const iterations = await this.getIterations(username);
    this.key = await this._getKey(username, password, iterations);
    const form = new FormData();
    form.append("method", "mobile");
    form.append("web", "1");
    form.append("xml", "1");
    form.append("username", username);
    form.append("hash", await this.getHash(this.key, password));
    form.append("iterations", iterations.toString());
    form.append("imei", "web_browser");
    otp && form.append("otp", (otp as number).toString());
    const result = await fetch(LOGIN, {
      method: "POST",
      body: form
    });
    const xml = await result.text();
    console.log(xml);
    const json: any = xml2js(xml);
    if (!json || !json.ok || !json.ok.$ || !json.ok.$.sessionid) {
      throw new Error("Bad session response.");
    } else {
      return json.ok.$.sessionid;
    }
  };

  getHash = async (key: CryptoKey, password: string): Promise<string> => {
    return this._BufferToHex(
      await this._getRawKey(await this._pbkdf2(encode(password), key, 1))
    );
  };

  getIterations = async (username: string): Promise<number> => {
    const form = new FormData();
    form.append("email", username);
    const result = await fetch(ITERATIONS, {
      method: "POST",
      body: form
    });
    const text = await result.text();
    return parseInt(text, 10);
  };

  getBlob = async (session: string) => {
    const result = await fetch(VAULT, {
      credentials: "include",
      headers: {
        Cookie: `PHPSESSID=${encodeURIComponent(session)};`
      }
    });
    console.log(result);
    if (result.ok) throw new Error("Vault coudn't be fetched.");
    else return result.body;
  };

  decryptBlob = async (data: ArrayBuffer) => {
    let accounts: Array<any> = [];
    let newBuffer = new Uint8Array(data);

    while (newBuffer.byteLength > 0) {
      const id = decode(newBuffer.slice(0, 4));
      const size = new Uint32Array(newBuffer.slice(4, 8))[0] + 8;
      const payload = newBuffer.slice(8, size);
      if (id === "ACCT") {
        const account = await this._getAccount(payload);
        accounts.push(account);
      }
      newBuffer = newBuffer.slice(size, newBuffer.byteLength);
    }

    return accounts;
  };

  getAccounts = async (fqdn: string) => {};

  addAccount = async () => {};

  _getAccount = (payload: ArrayBuffer) => {
    let newBuffer = new Uint8Array(payload);
    while (newBuffer.byteLength > 0) {
      const fieldSize = new Uint32Array(newBuffer.slice(0, 4))[0] + 4;
      const field = newBuffer.slice(4, fieldSize);
      this._getField(field);
      newBuffer = newBuffer.slice(fieldSize, newBuffer.length);
    }
  };

  _getField = async (field: ArrayBuffer) => {
    const length = field.byteLength;

    if (length === 0) return "";

    let decrypted;

    if (decode(field.slice(0, 1)) === "!" && length % 16 === 1 && length > 32) {
      decrypted = this._decrypt(field.slice(17, length), field.slice(1, 17));
    } else {
      decrypted = this._decrypt(field);
    }

    return decrypted;
  };

  _decrypt = async (data: ArrayBuffer, iv?: ArrayBuffer) => {
    return await window.crypto.subtle.decrypt(
      { name: iv ? "AES-CBC" : "AES-EBC", iv },
      this.key as CryptoKey,
      data
    );
  };

  _getKey = async (
    username: string,
    password: string,
    iterations: number
  ): Promise<CryptoKey> => {
    const secret = await this._getCryptoKey(password, "PBKDF2");
    return await this._pbkdf2(encode(username), secret, iterations);
  };

  _pbkdf2 = async (salt: Uint8Array, secret: CryptoKey, iterations: number) => {
    return await window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        iterations,
        salt,
        hash: "SHA-256"
      },
      secret,
      { name: "AES-CBC", length: 32 },
      true,
      ["encrypt", "decrypt"]
    );
  };

  _getRawKey = async (key: CryptoKey): Promise<ArrayBuffer> => {
    return await window.crypto.subtle.exportKey("raw", key);
  };

  _getCryptoKey = async (
    key: any,
    outputType: string,
    purpose?: Array<string>
  ) => {
    return window.crypto.subtle.importKey(
      "raw",
      encode(key),
      //@ts-ignore
      { name: outputType },
      true,
      purpose ? purpose : ["deriveKey"]
    );
  };

  _BufferToHex = (buffer: ArrayBuffer): string => {
    return Array.prototype.map
      .call(new Uint8Array(buffer), (x: number) =>
        ("00" + x.toString(16)).slice(-2)
      )
      .join("");
  };
}
