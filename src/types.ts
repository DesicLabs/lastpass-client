export type EntryFields = "name" | "url" | "type";

export type Entry = Record<EntryFields, string>;

export type EntryCredentialsFields = "username" | "password" | "otp";

export type EntryCredentials = Record<EntryCredentialsFields, string>;

export type RawEntryFields = EntryFields & EntryCredentialsFields;

export type RawEntry = Entry & EntryCredentials;

export interface Client {
  login: (
    password: string,
    username?: string,
    secret?: string
  ) => Promise<void>;
  getAccounts: () => Promise<Entry[]>;
  getAccountCredentials: (fqdn: string) => Promise<EntryCredentials>;
  addAccount: (account: Entry) => Promise<void>;
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
