export default class LastPass {
    key: ArrayBuffer | undefined;
    session: string | undefined;
    login: (username: string, password: string, otp?: number | undefined) => Promise<void>;
    getAccounts: () => Promise<any[]>;
    addAccount: (username: string, password: string, url: string, name: string, otp?: number | undefined) => Promise<string>;
    private _getHash;
    private _getIterations;
    private _fetchAccounts;
    private _decryptAccounts;
    private _getField;
    private _decrypt;
    private _encrypt;
    private _getKey;
    private _pbkdf2;
    private _getCryptoKey;
    private _bufferToHex;
    private _hexToBuffer;
    private _base64ToBuffer;
    private _bufferToBase64;
}
