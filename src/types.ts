export type EntryFields = "name" | "url" | "username" | "type" | "id";

export type Entry = Record<EntryFields, string>;

export type EntryCredentialsFields = "username" | "password" | "otp";

export type EntryCredentials = Record<EntryCredentialsFields, string>;

export type FullEntryFields = EntryFields & EntryCredentialsFields;

export type FullEntry = Entry & EntryCredentials;

export type NewEntry = Omit<FullEntry, "id">;

export interface Client {
  login: (
    password: string,
    username?: string,
    secret?: string
  ) => Promise<void>;
  getEntries: () => Promise<Entry[]>;
  getEntryCredentials: (fqdn: string) => Promise<EntryCredentials>;
  addEntry: (account: NewEntry) => Promise<void>;
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
