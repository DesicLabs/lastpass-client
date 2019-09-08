import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  pbkdf2Sync
} from "crypto";
import { RawEntry, RawEntryFields } from "../types";

export class Cipher {
  private username: string;
  private password: string;
  private key: Buffer;

  public init(username: string, password: string, iterations: string): void {
    this.username = username;
    this.password = password;
    this.setKey(iterations);
  }

  public getHash(): string {
    return pbkdf2Sync(
      this.key,
      Buffer.from(this.password),
      1,
      32,
      "sha256"
    ).toString("hex");
  }

  public decryptAccount<T extends Partial<RawEntry>>(account: T): T {
    const decipheredAccount: any = {};
    Object.keys(account).map((key: Partial<RawEntryFields>): void => {
      decipheredAccount[key] = this.getField(account[key]);
    });
    return decipheredAccount as T;
  }

  public encryptAccount(account: RawEntry): RawEntry {
    const cipheredAccount: any = {};
    Object.keys(account).map((key: RawEntryFields): void => {
      cipheredAccount[key] = this.encrypt(account[key]);
    });
    return cipheredAccount as RawEntry;
  }

  private setKey(iterations: string) {
    this.key = pbkdf2Sync(
      Buffer.from(this.password),
      Buffer.from(this.username),
      parseInt(iterations),
      32,
      "sha256"
    );
  }

  private decrypt(data: Buffer, iv: Buffer) {
    const decipher = createDecipheriv("aes-256-cbc", this.key, iv);
    let plaintext = decipher.update(data).toString("utf8");
    plaintext += decipher.final().toString("utf8");
    return plaintext;
  }

  private encrypt(data: string) {
    const iv = randomBytes(16);
    const cipher = createCipheriv("aes-256-cbc", this.key, iv);
    let cipherText = cipher.update(Buffer.from(data)).toString("base64");
    cipherText += cipher.final().toString("base64");
    return `!${iv.toString("base64")}|${cipherText}`;
  }

  private getField(field: string): string {
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
  }
}
