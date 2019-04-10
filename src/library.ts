import { xml2js } from "xml-js";
import { ITERATIONS, LOGIN, VAULT, CREATE } from "./endpoints";

export default class LastPass {
  key: ArrayBuffer | undefined;
  session: string | undefined;
  login = async (
    username: string,
    password: string,
    otp?: number
  ): Promise<void> => {
    const iterations = await this._getIterations(username);
    this.key = await this._getKey(username, password, iterations);
    const form = new FormData();
    form.append("method", "mobile");
    form.append("web", "1");
    form.append("xml", "1");
    form.append("username", username);
    form.append("hash", await this._getHash(this.key, password));
    form.append("iterations", iterations.toString());
    form.append("imei", "web_browser");
    otp && form.append("otp", (otp as number).toString());
    const result = await fetch(LOGIN, {
      method: "POST",
      body: form
    });
    const xml = await result.text();
    const json: any = xml2js(xml, { compact: true });
    if (
      !json ||
      !json.ok ||
      !json.ok._attributes ||
      !json.ok._attributes.sessionid
    ) {
      throw new Error("Bad session response.");
    } else {
      this.session = json.ok._attributes.sessionid;
    }
  };

  getAccounts = async () => {
    return await this._decryptAccounts();
  };

  addAccount = async (
    username: string,
    password: string,
    url: string,
    name: string,
    otp?: number
  ) => {
    const form = new FormData();
    form.append("username", await this._encrypt(username));
    form.append("password", await this._encrypt(password));
    form.append("url", this._bufferToHex(new TextEncoder().encode(url)));
    form.append("name", await this._encrypt(name));
    otp && form.append("otp", await this._encrypt(otp.toString()));
    const response = await fetch(CREATE, {
      method: "POST",
      body: form,
      headers: {
        Cookie: `PHPSESSID=${encodeURIComponent(this.session as string)};`
      }
    });
    if (response.ok) {
      return "User created successfully.";
    } else {
      throw new Error("Bad request.");
    }
  };

  private _getHash = async (
    key: ArrayBuffer,
    password: string
  ): Promise<string> => {
    return this._bufferToHex(
      await this._pbkdf2(
        new TextEncoder().encode(password),
        await this._getCryptoKey(key, "PBKDF2"),
        1
      )
    );
  };

  private _getIterations = async (username: string): Promise<number> => {
    const form = new FormData();
    form.append("email", username);
    const result = await fetch(ITERATIONS, {
      method: "POST",
      body: form
    });
    const text = await result.text();
    return parseInt(text, 10);
  };

  private _fetchAccounts = async () => {
    const result = await fetch(VAULT, {
      method: "POST",
      referrerPolicy: "no-referrer",
      headers: {
        Cookie: `PHPSESSID=${encodeURIComponent(this.session as string)};`
      }
    });
    if (!result.ok) {
      throw new Error("Vault coudn't be fetched.");
    } else {
      const {
        response: {
          accounts: { account }
        }
      } = xml2js(await result.text(), { compact: true }) as any;
      return account;
    }
  };

  private _decryptAccounts = async () => {
    const data = await this._fetchAccounts();
    let accounts: Array<any> = [];

    data.map(async (account: any, index: number) => {
      const {
        _attributes: { name, url, username },
        login: {
          _attributes: { p }
        }
      } = account;
      accounts.push({
        name: await this._getField(name),
        url: await this._getField(url),
        username: await this._getField(username),
        password: await this._getField(p)
      });
    });
    return accounts;
  };

  private _getField = async (field: string) => {
    const length = field.length;
    if (length === 0) return "";

    const [iv, payload] = field.split("|");
    let decrypted = "";

    if (field.slice(0, 1) === "!") {
      decrypted = await this._decrypt(
        this._base64ToBuffer(payload),
        this._base64ToBuffer(iv.slice(1))
      );
    } else {
      decrypted = new TextDecoder().decode(this._hexToBuffer(field));
    }

    return decrypted;
  };

  private _decrypt = async (data: ArrayBuffer, iv: ArrayBuffer) => {
    const key = await this._getCryptoKey(this.key as ArrayBuffer, "AES-CBC", [
      "decrypt"
    ]);
    return new TextDecoder().decode(
      await window.crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data)
    );
  };

  private _encrypt = async (data: string) => {
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const key = await this._getCryptoKey(this.key as ArrayBuffer, "AES-CBC", [
      "encrypt"
    ]);
    return `!${this._bufferToBase64(iv)}|${this._bufferToBase64(
      await window.crypto.subtle.encrypt(
        { name: "AES-CBC", iv },
        key,
        new TextEncoder().encode(data)
      )
    )}`;
  };

  private _getKey = async (
    username: string,
    password: string,
    iterations: number
  ): Promise<ArrayBuffer> => {
    const secret = await this._getCryptoKey(
      new TextEncoder().encode(password),
      "PBKDF2"
    );
    return await this._pbkdf2(
      new TextEncoder().encode(username),
      secret,
      iterations
    );
  };

  private _pbkdf2 = async (
    salt: Uint8Array,
    secret: CryptoKey,
    iterations: number
  ) => {
    return await window.crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        iterations,
        salt,
        hash: "SHA-256"
      },
      secret,
      32 * 8
    );
  };

  private async _getCryptoKey(
    key: ArrayBuffer,
    outputType: string,
    purpose?: Array<string>
  ) {
    return await window.crypto.subtle.importKey(
      "raw",
      key,
      //@ts-ignore
      { name: outputType },
      false,
      purpose !== undefined ? purpose : ["deriveKey", "deriveBits"]
    );
  }

  private _bufferToHex = (buffer: ArrayBuffer): string => {
    return Array.prototype.map
      .call(new Uint8Array(buffer), (x: number) =>
        ("00" + x.toString(16)).slice(-2)
      )
      .join("");
  };

  private _hexToBuffer = (hex: string): ArrayBuffer => {
    return new Uint8Array(
      (hex.match(/[\da-f]{2}/gi) as Array<any>).map(function(h) {
        return parseInt(h, 16);
      })
    );
  };

  private _base64ToBuffer = (base64: string) => {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  };

  private _bufferToBase64 = (buff: ArrayBuffer) => {
    let text = "";
    const binary = new Uint8Array(buff);
    for (let i = 0; i < binary.byteLength; i++) {
      text += String.fromCharCode(binary[i]);
    }
    return window.btoa(text);
  };
}
