export type EntryFields =
  | "name"
  | "url"
  | "type"
  | "username"
  | "password"
  | "otp";

export type Entry = Record<EntryFields, string>;

export interface Client {
  login: (
    password: string,
    username?: string,
    secret?: string
  ) => Promise<void>;
  getAccounts: () => Promise<Entry[]>;
  addAccount: (account: Entry) => Promise<boolean>;
}

export type Session = {
  sessionid: string;
  token: string;
};

export type HttpHeaders = Record<string, string>;
export type HttpMethod = "POST" | "GET" | "PUT" | "DELETE";
export type HttpBody = FormData;
export type RequestResponseType = "js" | "xml";

export interface HttpRequest {
  method: HttpMethod;
  body?: HttpBody;
  headers: HttpHeaders;
}
