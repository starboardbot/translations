/**
 * @typedef {
    "HELLO_WORLD"          |

    "IMAGE"                |
    "GIF_VIDEO"            |
    "VIDEO"                |
    "MEDIA"                |

    "SHORT_CLICK_TO_JUMP"  |
    "CLICK_TO_JUMP"        |
    "REFERENCED_MESSAGE"   |
    "TWEET"                |
    "UNKNOWN_TAG"          |
    "FROM_SERVER"          |
    "TRASH_EMBED"          |

    "GET_STARTED"          |
    "GET_STARTED_EMBED"    |
    "GET_STARTED_FOOTER"   |

    "CANT_SPEAK"           |
    "PREFIX_INFO"          |
    "HELP"                 |

    "NEED_VOTE"             |
    "NEED_PREMIUM"          |
    "STAR_REQ_FEAT"         |
    "EMOJIS_FEAT"           |
    "DOWNVOTE_FEAT"         |
    "MULTIPLE_EMOJIS_FEAT"  |
    "CHANNEL_SETTINGS_FEAT" |
    "AUTO_STAR_FEAT"        |

    "FIND_USER_MORE_SPECIFIC" |
    "FIND_USER_PROMPT"        |

    "COMMANDS"                        |
    "COMMANDS.COOLDOWN_MESSAGE"       |
    "COMMANDS.WAIT_SUGGESTIONS"       |
    "COMMANDS.COOLDOWN"               |
    "COMMANDS.COOLDOWN_EMBED"         |
    "COMMANDS.COMMAND_HELP_EMBED"     |
    "COMMANDS.COMMAND_DISABLED_EMBED" |
    "COMMANDS.COMMAND_ERROR_EMBED"    |
    "COMMANDS.COMMAND_INVALID_ARGS"   |
    "COMMANDS.MISSING_PERMISSIONS"    |

    "LANGUAGES" |
    "SETTINGS"
  } Key
 */
/**
 * @typedef {
    "en-GB" |
    "en-US" |
    "lt-LT" |
    "tr-TR" |
    "fuwwy"
  } LanguageCode
 */

const { readdirSync: readDirectory } = require("fs")
const { get } = require("lodash")

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
 * @type {[
    "en-GB",
    "en-US",
    "lt-LT",
    "tr-TR",
    "fuwwy",
  ]}
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
        case "TURKISH":
        case "TR":
        case "TURK":
          [a, b] = ["tr", "TR"]
          break
        case "LITHUANIAN":
        case "LT":
          [a, b] = ["lt", "LT"]
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
}

module.exports.languageNames = codes.map(c => module.exports.languages[c].name)
