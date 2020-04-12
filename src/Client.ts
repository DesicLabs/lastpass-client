import { Cipher } from "./services/Cipher";
import { Lastpass } from "./services/Lastpass";
import { Client, Entry, EntryCredentials, NewEntry, FullEntry } from "./types";

export default class LastpassClient implements Client {
  private cipher: Cipher;
  private lastpass: Lastpass;
  private http: any;

  public constructor(http: any) {
    this.http = http;
    this.cipher = new Cipher();
    this.lastpass = new Lastpass(http);
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

  public async getEntries(): Promise<Entry[]> {
    const cipheredEntries = await this.lastpass.fetchAccounts();
    return cipheredEntries.map(({ url, username, name, type, id }) =>
      this.cipher.decryptAccount<Entry>({ url, username, name, type, id })
    );
  }

  public async getEntryCredentials(id: string): Promise<EntryCredentials> {
    const cipheredEntries = await this.lastpass.fetchAccounts();
    const foundEntry = cipheredEntries.find(entry => entry.id === id);
    if (!foundEntry) throw new Error("Account not found.");
    const entry = this.cipher.decryptAccount<FullEntry>(foundEntry);
    return {
      username: entry.username,
      password: entry.password,
      otp: entry.otp
    };
  }

  public async addEntry(entry: NewEntry): Promise<void> {
    const account = await this.cipher.encryptAccount(entry);
    const res = await this.lastpass.createEntry(account);
    return res && res.id || '';
  }
}
