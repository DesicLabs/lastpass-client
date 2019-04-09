export default class LastPass {
    login: (username: string, password: string, otp?: number | undefined) => Promise<any>;
    getHash: (username: string, password: string, iterations: number) => Promise<string>;
    getIterations: (username: string) => Promise<number>;
    getBlob: () => Promise<void>;
    decryptBlob: () => Promise<void>;
    getAccounts: () => Promise<void>;
    addAccount: () => Promise<void>;
    _getKey: (username: string, password: string, iterations: number) => Promise<CryptoKey>;
    _pbkdf2: (salt: Uint8Array, secret: CryptoKey, iterations: number) => Promise<CryptoKey>;
    _getRawKey: (key: CryptoKey) => Promise<ArrayBuffer>;
    _getCryptoKey: (key: any, outputType: string, purpose?: string[] | undefined) => Promise<any>;
    _BufferToHex: (buffer: ArrayBuffer) => string;
}
