"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapTranslation = exports.pickTranslation = exports.translate = exports.translations = exports.defaultLocale = exports.locales = void 0;
const intl_messageformat_1 = __importDefault(require("intl-messageformat"));
exports.locales = ["en-GB"]; // , "en-US", "es_ES"
exports.defaultLocale = "en-GB";
exports.translations = Object.fromEntries(exports.locales.map(locale => [locale, require(`./translations/${locale}`)]));
function get(object, path, defaultValue) {
    for (const p of path.split(".")) {
        object = object[p];
        if (object == null)
            return defaultValue;
    }
    return object;
}
function fixCase(key) {
    return key
        .replace(/ +|-/g, "_")
        .replace(/([^A-Z_])([A-Z])/g, (_, bef, aft) => `${bef}_${aft}`)
        .toUpperCase();
}
function translate(key, locale, options) {
    key = fixCase(key);
    const defaultValue = get(exports.translations, `${exports.defaultLocale}.${key}`);
    const raw = get(exports.translations, `${locale}.${key}`, defaultValue);
    if (!raw)
        throw new ReferenceError(`Unknown translation ${key}`);
    let msg = Array.isArray(raw) ? raw.join("\n") : raw;
    // message with input
    if (msg.includes("{"))
        msg = new intl_messageformat_1.default(msg, msg === defaultValue ? "en-GB" : [locale, exports.defaultLocale, "en-GB"], undefined, { ignoreTag: true, requiresOtherClause: false }).format(options);
    return msg;
}
exports.default = translate;
exports.translate = translate;
function pickTranslation(keyOptions, locale, options) {
    const key = Object.keys(keyOptions).find(k => keyOptions[k]);
    return key ? translate(key, locale, options) : null;
}
exports.pickTranslation = pickTranslation;
function wrapTranslation(key, options) {
    return (locale) => translate(key, locale, options);
}
exports.wrapTranslation = wrapTranslation;
//# sourceMappingURL=index.js.map