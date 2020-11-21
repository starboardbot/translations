/**
 * @typedef {
    "HELLO_WORLD"
  } Key
 */
/**
 * @typedef {
    "en-GB" |
    "en-US"
  } LanguageCode
 */
const { readdirSync: readDirectory } = require("fs")

/**
 * Every lanuage code available - [ "en-GB", "en-US", ... ]
 * @type {[
    "en-GB",
    "en-US"
  ]}
 */
const codes = readDirectory(
  require("path").resolve("./languages")
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
   * @returns {string}
   */
  get(key, code, ...args) {
    key = this._fixCase(key)
    code = this._parseCode(code)
    
    const msg = this.languages[code][key] || this.languages[this.codes.default][key]
    if (!msg) return null
    return typeof msg === "function" ? msg(...args) : msg
  },

  /**
   * Parse a string into a valid language code, defaulting to "en-GB".
   * @param {string} code
   * @returns {LanguageCode}
   */
  _parseCode(code) {
    if (this.codes.includes(code)) return code
    let [a, b = ""] = this._fixCase(code).split("_") // "EN_US"
    if (!a) return codes.default
    if (!b)
      switch (a) { // parses "english" to "en-US", "spanish" to "es" etc
        case "ENGLISH": case "EN": a = "en-US"; break;
      }

    code = `${a.toLowerCase()}${b && `-${b}`}`
    if (!this.codes.includes(code)) return codes.default
    return code
  },

  /**
   * Fixes the casing of a provided key, for example: "fooBar" -> "FOO_BAR"
   * @param {string} key
   * @returns {Key}
   */
  _fixCase(key) {
    if (typeof key !== "string") return ""
    return key.replace(/ +/g, "_").replace(/([^A-Z_])([A-Z])/g, (_, bef, aft) => `${bef}_${aft}`).toUpperCase()
  },
}

module.exports.languageNames = codes.map(c => module.exports.languages[c].name)