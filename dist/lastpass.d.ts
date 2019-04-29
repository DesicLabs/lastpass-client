/// <reference types="node" />
interface Account {
    name: string;
    url: string;
    username: string;
    password: string;
}
export default class LastPass {
    key: Buffer;
    session: {
        sessionid: string;
        token: string;
    };
    login: (username: string, password: string, otp?: string) => Promise<void>;
    getAccounts: () => Promise<Account[]>;
    addAccount: (username: string, password: string, url: string, name: string, otp?: string) => Promise<void>;
    private getHash;
    private getIterations;
    private fetchAccounts;
    private decryptAccounts;
    private decryptAccount;
    private getField;
    private decrypt;
    private encrypt;
    private getKey;
    private request;
}
export {};
