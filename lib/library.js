"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var xml_js_1 = require("xml-js");
var endpoints_1 = require("./endpoints");
var LastPass = /** @class */ (function () {
    function LastPass() {
        var _this = this;
        this.login = function (username, password, otp) { return __awaiter(_this, void 0, void 0, function () {
            var iterations, _a, form, _b, _c, _d, result, xml, json;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this._getIterations(username)];
                    case 1:
                        iterations = _e.sent();
                        _a = this;
                        return [4 /*yield*/, this._getKey(username, password, iterations)];
                    case 2:
                        _a.key = _e.sent();
                        form = new FormData();
                        form.append("method", "mobile");
                        form.append("web", "1");
                        form.append("xml", "1");
                        form.append("username", username);
                        _c = (_b = form).append;
                        _d = ["hash"];
                        return [4 /*yield*/, this._getHash(this.key, password)];
                    case 3:
                        _c.apply(_b, _d.concat([_e.sent()]));
                        form.append("iterations", iterations.toString());
                        form.append("imei", "web_browser");
                        otp && form.append("otp", otp.toString());
                        return [4 /*yield*/, fetch(endpoints_1.LOGIN, {
                                method: "POST",
                                body: form
                            })];
                    case 4:
                        result = _e.sent();
                        return [4 /*yield*/, result.text()];
                    case 5:
                        xml = _e.sent();
                        json = xml_js_1.xml2js(xml, { compact: true });
                        if (!json ||
                            !json.ok ||
                            !json.ok._attributes ||
                            !json.ok._attributes.sessionid) {
                            throw new Error("Bad session response.");
                        }
                        else {
                            this.session = json.ok._attributes.sessionid;
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.getAccounts = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._decryptAccounts()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.addAccount = function (username, password, url, name, otp) { return __awaiter(_this, void 0, void 0, function () {
            var form, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, response;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        form = new FormData();
                        _b = (_a = form).append;
                        _c = ["username"];
                        return [4 /*yield*/, this._encrypt(username)];
                    case 1:
                        _b.apply(_a, _c.concat([_p.sent()]));
                        _e = (_d = form).append;
                        _f = ["password"];
                        return [4 /*yield*/, this._encrypt(password)];
                    case 2:
                        _e.apply(_d, _f.concat([_p.sent()]));
                        form.append("url", this._bufferToHex(new TextEncoder().encode(url)));
                        _h = (_g = form).append;
                        _j = ["name"];
                        return [4 /*yield*/, this._encrypt(name)];
                    case 3:
                        _h.apply(_g, _j.concat([_p.sent()]));
                        _k = otp;
                        if (!_k) return [3 /*break*/, 5];
                        _m = (_l = form).append;
                        _o = ["otp"];
                        return [4 /*yield*/, this._encrypt(otp.toString())];
                    case 4:
                        _k = _m.apply(_l, _o.concat([_p.sent()]));
                        _p.label = 5;
                    case 5:
                        _k;
                        return [4 /*yield*/, fetch(endpoints_1.CREATE, {
                                method: "POST",
                                body: form,
                                headers: {
                                    Cookie: "PHPSESSID=" + encodeURIComponent(this.session) + ";"
                                }
                            })];
                    case 6:
                        response = _p.sent();
                        if (response.ok) {
                            return [2 /*return*/, "User created successfully."];
                        }
                        else {
                            throw new Error("Bad request.");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this._getHash = function (key, password) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this._bufferToHex;
                        _b = this._pbkdf2;
                        _c = [new TextEncoder().encode(password)];
                        return [4 /*yield*/, this._getCryptoKey(key, "PBKDF2")];
                    case 1: return [4 /*yield*/, _b.apply(this, _c.concat([_d.sent(),
                            1]))];
                    case 2: return [2 /*return*/, _a.apply(this, [_d.sent()])];
                }
            });
        }); };
        this._getIterations = function (username) { return __awaiter(_this, void 0, void 0, function () {
            var form, result, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = new FormData();
                        form.append("email", username);
                        return [4 /*yield*/, fetch(endpoints_1.ITERATIONS, {
                                method: "POST",
                                body: form
                            })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        text = _a.sent();
                        return [2 /*return*/, parseInt(text, 10)];
                }
            });
        }); };
        this._fetchAccounts = function () { return __awaiter(_this, void 0, void 0, function () {
            var result, account, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch(endpoints_1.VAULT, {
                            method: "POST",
                            referrerPolicy: "no-referrer",
                            headers: {
                                Cookie: "PHPSESSID=" + encodeURIComponent(this.session) + ";"
                            }
                        })];
                    case 1:
                        result = _b.sent();
                        if (!!result.ok) return [3 /*break*/, 2];
                        throw new Error("Vault coudn't be fetched.");
                    case 2:
                        _a = xml_js_1.xml2js;
                        return [4 /*yield*/, result.text()];
                    case 3:
                        account = _a.apply(void 0, [_b.sent(), { compact: true }]).response.accounts.account;
                        return [2 /*return*/, account];
                }
            });
        }); };
        this._decryptAccounts = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, accounts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._fetchAccounts()];
                    case 1:
                        data = _a.sent();
                        accounts = [];
                        data.map(function (account, index) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, name, url, username, p, _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        _a = account._attributes, name = _a.name, url = _a.url, username = _a.username, p = account.login._attributes.p;
                                        _c = (_b = accounts).push;
                                        _d = {};
                                        return [4 /*yield*/, this._getField(name)];
                                    case 1:
                                        _d.name = _e.sent();
                                        return [4 /*yield*/, this._getField(url)];
                                    case 2:
                                        _d.url = _e.sent();
                                        return [4 /*yield*/, this._getField(username)];
                                    case 3:
                                        _d.username = _e.sent();
                                        return [4 /*yield*/, this._getField(p)];
                                    case 4:
                                        _c.apply(_b, [(_d.password = _e.sent(),
                                                _d)]);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/, accounts];
                }
            });
        }); };
        this._getField = function (field) { return __awaiter(_this, void 0, void 0, function () {
            var length, _a, iv, payload, decrypted;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        length = field.length;
                        if (length === 0)
                            return [2 /*return*/, ""];
                        _a = field.split("|"), iv = _a[0], payload = _a[1];
                        decrypted = "";
                        if (!(field.slice(0, 1) === "!")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._decrypt(this._base64ToBuffer(payload), this._base64ToBuffer(iv.slice(1)))];
                    case 1:
                        decrypted = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        decrypted = new TextDecoder().decode(this._hexToBuffer(field));
                        _b.label = 3;
                    case 3: return [2 /*return*/, decrypted];
                }
            });
        }); };
        this._decrypt = function (data, iv) { return __awaiter(_this, void 0, void 0, function () {
            var key, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._getCryptoKey(this.key, "AES-CBC", [
                            "decrypt"
                        ])];
                    case 1:
                        key = _c.sent();
                        _b = (_a = new TextDecoder()).decode;
                        return [4 /*yield*/, window.crypto.subtle.decrypt({ name: "AES-CBC", iv: iv }, key, data)];
                    case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        }); };
        this._encrypt = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var iv, key, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        iv = window.crypto.getRandomValues(new Uint8Array(16));
                        return [4 /*yield*/, this._getCryptoKey(this.key, "AES-CBC", [
                                "encrypt"
                            ])];
                    case 1:
                        key = _c.sent();
                        _a = "!" + this._bufferToBase64(iv) + "|";
                        _b = this._bufferToBase64;
                        return [4 /*yield*/, window.crypto.subtle.encrypt({ name: "AES-CBC", iv: iv }, key, new TextEncoder().encode(data))];
                    case 2: return [2 /*return*/, _a + _b.apply(this, [_c.sent()])];
                }
            });
        }); };
        this._getKey = function (username, password, iterations) { return __awaiter(_this, void 0, void 0, function () {
            var secret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getCryptoKey(new TextEncoder().encode(password), "PBKDF2")];
                    case 1:
                        secret = _a.sent();
                        return [4 /*yield*/, this._pbkdf2(new TextEncoder().encode(username), secret, iterations)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this._pbkdf2 = function (salt, secret, iterations) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.crypto.subtle.deriveBits({
                            name: "PBKDF2",
                            iterations: iterations,
                            salt: salt,
                            hash: "SHA-256"
                        }, secret, 32 * 8)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this._bufferToHex = function (buffer) {
            return Array.prototype.map
                .call(new Uint8Array(buffer), function (x) {
                return ("00" + x.toString(16)).slice(-2);
            })
                .join("");
        };
        this._hexToBuffer = function (hex) {
            return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
                return parseInt(h, 16);
            }));
        };
        this._base64ToBuffer = function (base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        };
        this._bufferToBase64 = function (buff) {
            var text = "";
            var binary = new Uint8Array(buff);
            for (var i = 0; i < binary.byteLength; i++) {
                text += String.fromCharCode(binary[i]);
            }
            return window.btoa(text);
        };
    }
    LastPass.prototype._getCryptoKey = function (key, outputType, purpose) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.crypto.subtle.importKey("raw", key, 
                        //@ts-ignore
                        { name: outputType }, false, purpose !== undefined ? purpose : ["deriveKey", "deriveBits"])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LastPass;
}());
exports.default = LastPass;
