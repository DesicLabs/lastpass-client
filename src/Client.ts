import { Cipher } from "./services/Cipher";
import { Lastpass } from "./services/Lastpass";
import { Client, Entry, EntryCredentials, RawEntry } from "./types";

export default class LastpassClient implements Client {
  private cipher: Cipher;
  private lastpass: Lastpass;

  public constructor() {
    this.cipher = new Cipher();
    this.lastpass = new Lastpass();
  }

  public async login(
    password: string,
    username?: string,
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
    return cipheredAccounts.map(({ url, name, type }) =>
      this.cipher.decryptAccount<Entry>({ url, name, type })
    );
  }

  public async getAccountCredentials(fqdn: string): Promise<EntryCredentials> {
    const cipheredAccounts = await this.lastpass.fetchAccounts();
    const accounts = cipheredAccounts.map(({ url, username, password, otp }) =>
      this.cipher.decryptAccount<EntryCredentials & { url: string }>({
        url,
        username,
        password,
        otp
      })
    );
    const account = accounts.find(({ url }) => url.match(new RegExp(fqdn)));
    if (!account) throw new Error("Account not found.");
    return {
      username: account.username,
      password: account.password,
      otp: account.otp
    };
  }

  public async addAccount(entry: RawEntry): Promise<void> {
    const account = await this.cipher.encryptAccount(entry);
    await this.lastpass.createAccount(account);
  }
}
