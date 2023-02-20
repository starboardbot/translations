const { readdirSync: readDirectory } = require("fs")
const IntlMessageFormat = require("intl-messageformat").IntlMessageFormat
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
  } Locale
 */

const get = (object, path, defaultValue) => {
  path = path.split(".")
  for (const p of path) {
    object = object[p]
    if (object == null) return defaultValue
  }
  return object
}

// used in languages and code formatting and stuff
if (typeof String.prototype.stripIndents !== "function") Object.defineProperty(String.prototype, "stripIndents", {
  value: function(tabSize) {
    if (!tabSize || typeof tabSize !== "number" || tabSize < 1)
      return this.trim().replace(/^[\t ]+/gm, "")
    return this.trim().replace(new RegExp(`^[\\t]{0,${tabSize}}`, "gm"), "")
  },
  writable: true,
  configurable: true,
})

/**
 * Every locale available - [ "en-GB", "en-US", ... ]
 * @type {Locale[]}
 */
const locales = readDirectory(
  require("path").resolve(__dirname, "./languages")
).map(c =>
  c.endsWith(".js") ? c.slice(0, -3) : c
)

locales.default = "en-GB"

module.exports = {
  locales,
  messages: Object.assign(...
    locales.map(locale => ({
      [locale]: require(`./languages/${locale}`)
    }))
  ),

  /**
   * Get a message in a specific language.
   * @template {Key} K
   * @param {K} key The key of the message
   * @param {Locale} locale The locale
   * @param {import("./types")[K]?} options Object of parameters used in the translation.
   * @returns {string} The message in a specific language, defaulting to English (GB) if not found.
   */
  get(key, locale, options) {
    key = this._fixCase(key)
    locale = this._parseLocale(locale)

    const defaultValue = get(this.messages, `${this.locales.default}.${key}`)
    let msg = get(
      this.messages,
      `${locale}.${key}`,
      defaultValue
    )
    if (!msg) return null

    // message with input
    if (Array.isArray(msg))
      msg = msg.map(m =>
        !m.includes("{")
          ? m
          : new IntlMessageFormat(m, msg === defaultValue ? "en-GB" : [locale, this.locales.default, "en-GB"], null, { ignoreTag: true }).format(options)
      )
    else {
      if (msg.includes("{"))
        msg = new IntlMessageFormat(msg, msg === defaultValue ? "en-GB" : [locale, this.locales.default, "en-GB"], null, { ignoreTag: true }).format(
          options
        )
      if (msg.includes("  ")) msg = msg.stripIndents()
    }
    return msg
  },

  /**
   * Parse a string into a valid locale, defaulting to "en-GB".
   * @param {string} str
   * @param {boolean} returnNull Return null instead of defaulting
   * @returns {Locale}
   */
  _parseLocale(str, returnNull) {
    if (this.locales.includes(str)) return str
    let [a, b = ""] = this._fixCase(str).split(/[-_]/) // "EN_US" -> ["EN", "US"]
    if (!a) return returnNull ? null : this.locales.default
    if (b === "(GB)" || b === "(US)") [a, b] = ["en", b.slice(1, -1)]
    if (!b)
      switch (a) { // parses "english" to "en-US", "spanish" to "es" etc
        case "DEFAULT":
        case "NONE":
        case "GB":
        case "UK":
        case "ENGLISH":
          [a, b] = ["en", "GB"]
          break
        case "AMERICAN":
        case "USA":
        case "US":
        case "EN":
          [a, b] = ["en", "US"]
          break
        case "SPANISH":
        case "SPAIN":
        case "ES":
        case "ESP":
          [a, b] = ["es", "ES"]
          break
        case "FURRY":
        case "OWO":
          a = "fuwwy"
      }

    str = `${a.toLowerCase()}${b && `-${b}`}`
    if (!this.locales.includes(str)) return returnNull ? null : this.locales.default
    return str
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
}