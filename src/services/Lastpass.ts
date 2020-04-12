import { ITERATIONS, VAULT, LOGIN, CREATE } from "../config";
import { Session, FullEntry } from "../types";
import { request } from "../utilities";

export class Lastpass {
  private session: Session;
  private http: any;

  constructor(http: any) {
    this.http = http;
  }

  public async getIterations(email: string): Promise<string> {
    return (await request(this.http, ITERATIONS, "text", {
      email
    })) as string;
  }

  public async login(
    email: string,
    hash: string,
    iterations: string,
    otp?: string
  ) {
    const body = { username: email, hash, iterations, ...(otp && { otp }) };
    const json: any = await request(this.http, LOGIN, "json", body);
    if (
      json &&
      json.response &&
      json.response.error &&
      json.response.error._attributes && 
      json.response.error._attributes.message
    )
      throw new Error(json.response.error._attributes.message);
    if (
      !json ||
      !json.ok ||
      !json.ok._attributes ||
      !json.ok._attributes.sessionid
    )
      throw new Error("Bad session response.");
      else this.session = json.ok._attributes;
  }

  public async fetchAccounts(): Promise<FullEntry[]> {
    const {
      response: {
        accounts: { account }
      }
    }: any = await request(this.http, VAULT, "json", undefined, this.session);
    return this.transformAccounts(Array.isArray(account) ? account : [account]);
  }

  public async createEntry(body: Record<string, string>): Promise<any> {
    return await request(this.http, CREATE, "json", body, this.session);
  }

  private transformAccounts(accounts: any[]): FullEntry[] {
    return accounts.map(account => {
      let {
        _attributes: { name, url, username, group, id },
        login: {
          _attributes: { p }
        }
      } = account;
      return { name, url, username, type: group, password: p, otp: "", id };
    });
  }
}
