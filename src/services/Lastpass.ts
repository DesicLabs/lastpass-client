import { ITERATIONS, VAULT, LOGIN, CREATE } from "../config";
import { Session, RawEntry } from "../types";
import { request } from "../utilities";

export class Lastpass {
  private session: Session;

  public async getIterations(email: string): Promise<string> {
    return (await request(ITERATIONS, "POST", "text", {
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
    const json: any = await request(LOGIN, "POST", "js", body);
    if (
      !json ||
      !json.ok ||
      !json.ok._attributes ||
      !json.ok._attributes.sessionid
    )
      throw new Error("Bad session response.");
    else this.session = json.ok._attributes;
  }

  public async fetchAccounts(): Promise<RawEntry[]> {
    const {
      response: {
        accounts: { account }
      }
    }: any = await request(VAULT, "POST", "js", undefined, this.session);
    return this.transformAccounts(Array.isArray(account) ? account : [account]);
  }

  public async createAccount(body: Record<string, string>): Promise<boolean> {
    const req: any = await request(CREATE, "POST", "js", body, this.session);
    return req.ok;
  }

  private transformAccounts(accounts: any[]): RawEntry[] {
    return accounts.map(account => {
      let {
        _attributes: { name, url, username, group },
        login: {
          _attributes: { p }
        }
      } = account;
      return { name, url, username, type: group, password: p, otp: "" };
    });
  }
}
