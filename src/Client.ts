import Cipher from "./services/Cipher";
import Lastpass from "./services/Lastpass";
import { Client, Entry } from "./types";

export default class LastpassClient implements Client {
  private cipher: Cipher;
  private lastpass: Lastpass;

  public constructor() {
    this.cipher = new Cipher();
    this.lastpass = new Lastpass();
  }

  public async login(
    username: string,
    password: string,
    otp?: string
  ): Promise<void> {
    const iterations = await this.lastpass.getIterations(username);
    this.cipher.init(username, password, iterations);
    return await this.lastpass.login(
      username,
      this.cipher.getHash(),
      iterations,
      otp
    );
  }

  public async getAccounts(): Promise<Entry[]> {
    const cipheredAccounts = await this.lastpass.fetchAccounts();
    return cipheredAccounts.map(account => this.cipher.decryptAccount(account));
  }

  public async addAccount(entry: Entry): Promise<boolean> {
    const account = await this.cipher.encryptAccount(entry);
    return await this.lastpass.createAccount(account);
  }
}
