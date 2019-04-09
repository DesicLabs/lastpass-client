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
var encode = new TextEncoder().encode;
var LastPass = /** @class */ (function () {
    function LastPass() {
        var _this = this;
        this.login = function (username, password, otp) { return __awaiter(_this, void 0, void 0, function () {
            var iterations, form, _a, _b, _c, result, xml, json;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getIterations(username)];
                    case 1:
                        iterations = _d.sent();
                        form = new FormData();
                        form.append("method", "mobile");
                        form.append("web", "1");
                        form.append("xml", "1");
                        form.append("username", username);
                        _b = (_a = form).append;
                        _c = ["hash"];
                        return [4 /*yield*/, this.getHash(username, password, iterations)];
                    case 2:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        form.append("iterations", iterations.toString());
                        form.append("imei", "web_browser");
                        otp && form.append("otp", otp.toString());
                        return [4 /*yield*/, fetch(endpoints_1.LOGIN, {
                                method: "POST",
                                body: form
                            })];
                    case 3:
                        result = _d.sent();
                        return [4 /*yield*/, result.text()];
                    case 4:
                        xml = _d.sent();
                        console.log(xml);
                        json = xml_js_1.xml2js(xml);
                        if (!json || !json.ok || !json.ok.$ || !json.ok.$.sessionid) {
                            throw new Error("Bad session response.");
                        }
                        else {
                            return [2 /*return*/, json.ok.$.sessionid];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.getHash = function (username, password, iterations) { return __awaiter(_this, void 0, void 0, function () {
            var key, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._getKey(username, password, iterations)];
                    case 1:
                        key = _c.sent();
                        _a = this._BufferToHex;
                        _b = this._getRawKey;
                        return [4 /*yield*/, this._pbkdf2(encode(password), key, 1)];
                    case 2: return [4 /*yield*/, _b.apply(this, [_c.sent()])];
                    case 3: return [2 /*return*/, _a.apply(this, [_c.sent()])];
                }
            });
        }); };
        this.getIterations = function (username) { return __awaiter(_this, void 0, void 0, function () {
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
        this.getBlob = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.decryptBlob = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.getAccounts = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.addAccount = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this._getKey = function (username, password, iterations) { return __awaiter(_this, void 0, void 0, function () {
            var secret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getCryptoKey(password, "PBKDF2")];
                    case 1:
                        secret = _a.sent();
                        return [4 /*yield*/, this._pbkdf2(encode(username), secret, iterations)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this._pbkdf2 = function (salt, secret, iterations) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.crypto.subtle.deriveKey({
                            name: "PBKDF2",
                            iterations: iterations,
                            salt: salt,
                            hash: "SHA-256"
                        }, secret, { name: "AES-CBC", length: 32 }, true, ["encrypt", "decrypt"])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this._getRawKey = function (key) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.crypto.subtle.exportKey("raw", key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this._getCryptoKey = function (key, outputType, purpose) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, window.crypto.subtle.importKey("raw", encode(key), 
                    //@ts-ignore
                    { name: outputType }, true, purpose ? purpose : ["deriveKey"])];
            });
        }); };
        this._BufferToHex = function (buffer) {
            return Array.prototype.map
                .call(new Uint8Array(buffer), function (x) {
                return ("00" + x.toString(16)).slice(-2);
            })
                .join("");
        };
    }
    return LastPass;
}());
exports.default = LastPass;
