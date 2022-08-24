/**
 * @template {Record<string, unknown>} T
 * @template [Key=keyof T]
 * @typedef {Key extends string ? T[Key] extends Record<string, unknown> ? `${Key}.${Flatten<T[Key]>}` : `${Key}` : never} Flatten
 */
/**
 * @typedef {Flatten<import("./languages/en-GB")>} Key
 */
/**
 * @typedef {
    "en-GB" |
    "en-US" |
    "es-ES" |
    "fuwwy"
  } LanguageCode
 */

const { readdirSync: readDirectory } = require("fs")
const get = (object, path, defaultValue) => {
  path = path.split(".")
  for (const p of path) {
    object = object[p]
    if (object == null) return defaultValue
  }
  return object
}

// used in languages and code formatting and stuff
if (typeof String.prototype.stripIndents !== "function") Object.defineProperties(String.prototype, "stripIndents", {
  value: function(tabSize) {
    if (!tabSize || typeof tabSize !== "number" || tabSize < 1)
      return this.trim().replace(/^[\t ]+/gm, "")
    return this.trim().replace(new RegExp(`^[\\t]{0,${tabSize}}`, "gm"), "")
  },
  writable: true,
  configurable: true,
})

/**
 * Every lanuage code available - [ "en-GB", "en-US", ... ]
 * @type {LanguageCode[]}
 */
const codes = readDirectory(
  require("path").resolve(__dirname, "./languages")
).map(c =>
  c.endsWith(".js") ? c.slice(0, -3) : c
)

codes.default = "en-GB"

module.exports = {
  codes,
  languages: Object.assign(...
    codes.map(c => ({
      [c]: require(`./languages/${c}`)
    }))
  ),

  /**
   * Get a message in a specific language.
   * @param {Key} key The key of the message
   * @param {LanguageCode} code The code of the language
   * @param {...*} args Arguments for the function to retrieve the message, if any.
   * @returns {string} The message in a specific language, defaulting to english if not found.
   */
  get(key, code, ...args) {
    key = this._fixCase(Array.isArray(key) ? key.join(".") : key)
    code = this._parseLocale(code)
    
    const msg = get(
      this.languages,
      `${code}.${key}`,
      get(this.languages, `${this.codes.default}.${key}`)
    )
    if (!msg) return null

    return typeof msg === "function" ? msg(...args) : msg
  },

  /**
   * Parse a string into a valid locale, defaulting to "en-GB".
   * @param {string} code
   * @param {boolean} returnNull Return null instead of defaulting
   * @returns {LanguageCode}
   */
  _parseLocale(code, returnNull) {
    if (this.codes.includes(code)) return code
    let [a, b = ""] = this._fixCase(code).split(/[-_]/) // "EN_US" -> ["EN", "US"]
    if (!a) return returnNull ? null : this.codes.default
    if (b === "(GB)" || b === "(US)") [a, b] = ["en", b.slice(1, -1)]
    if (!b)
      switch (a) { // parses "english" to "en-US", "spanish" to "es" etc
        case "DEFAULT":
        case "NONE":
        case "GB":
        case "UK":
          [a, b] = ["en", "GB"]
          break
        case "ENGLISH":
        case "AMERICAN":
        case "USA":
        case "US":
        case "EN":
          [a, b] = ["en", "US"]
          break
        case "SPANISH":
        case "SPAIN":
        case "LATINO":
        case "ES":
        case "ESP":
          [a, b] = ["es", "ES"]
          break
        case "FURRY":
        case "OWO":
          a = "fuwwy"
      }

    code = `${a.toLowerCase()}${b && `-${b}`}`
    if (!this.codes.includes(code)) return returnNull ? null : this.codes.default
    return code
  },

  /**
   * Fixes the casing of a provided key, for example: "fooBar" -> "FOO_BAR"
   * @param {string} key
   * @returns {Key}
   */
  _fixCase(key) {
    if (Array.isArray(key)) key = key.join(".")
    if (typeof key !== "string") return ""

    return key
      .replace(/ +|-/g, "_")
      .replace(/([^A-Z_])([A-Z])/g, (_, bef, aft) => `${bef}_${aft}`)
      .replace(/_?\._?/g, ".") // replace _._ with .
      .toUpperCase()
  },
  languageNames: []
}

module.exports.languageNames.push(...codes.map(c => module.exports.languages[c].name))