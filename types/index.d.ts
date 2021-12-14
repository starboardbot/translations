export type Key =
  | "HELLO_WORLD"
  | "IMAGE"
  | "GIF_VIDEO"
  | "VIDEO"
  | "MEDIA"
  | "SHORT_CLICK_TO_JUMP"
  | "CLICK_TO_JUMP"
  | "REFERENCED_MESSAGE"
  | "TWEET"
  | "UNKNOWN_TAG"
  | "FROM_SERVER"
  | "TRASH_EMBED"
  | "GET_STARTED"
  | "GET_STARTED_EMBED"
  | "GET_STARTED_FOOTER"
  | "CANT_SPEAK"
  | "PREFIX_INFO"
  | "HELP"
  | "NEED_VOTE"
  | "NEED_PREMIUM"
  | "STAR_REQ_FEAT"
  | "EMOJIS_FEAT"
  | "DOWNVOTE_FEAT"
  | "MULTIPLE_EMOJIS_FEAT"
  | "CHANNEL_SETTINGS_FEAT"
  | "AUTO_STAR_FEAT"
  | "FIND_USER_MORE_SPECIFIC"
  | "FIND_USER_PROMPT"
  | "COMMANDS"
  | "COMMANDS.COOLDOWN_MESSAGE"
  | "COMMANDS.WAIT_SUGGESTIONS"
  | "COMMANDS.COOLDOWN"
  | "COMMANDS.COOLDOWN_EMBED"
  | "COMMANDS.COMMAND_HELP_EMBED"
  | "COMMANDS.COMMAND_DISABLED_EMBED"
  | "COMMANDS.COMMAND_ERROR_EMBED"
  | "COMMANDS.COMMAND_INVALID_ARGS"
  | "COMMANDS.MISSING_PERMISSIONS"
  | "LANGUAGES"
  | "SETTINGS"

export type LanguageCode = "en-GB" | "en-US" | "lt-LT" | "tr-TR" | "fuwwy"

/**
 * Every lanuage code available - [ "en-GB", "en-US", ... ]
 */
export const codes: LanguageCode & { default: "en-GB" }

// TODO: type language files
export declare const languages: Record<LanguageCode, LanguageDeclaration>

/**
 * Get a message in a specific language.
 * @param key The key of the message
 * @param code The code of the language
 * @param args Arguments for the function to retrieve the message, if any.
 * @returns The message in a specific language, defaulting to english if not found.
 */
export declare function get(key: Key, code: LanguageCode, ...args: any[]): string

/**
 * Parse a string into a valid locale, defaulting to "en-GB".
 * @param returnNull Return null instead of defaulting
 */
export declare function _parseLocale(code: string, returnNull?: boolean): LanguageCode

/**
 * Fixes the casing of a provided key, for example: "fooBar" -> "FOO_BAR"
 */
export declare function _fixCase(key: string): Key

export declare const languageNames: string[]

export interface LanguageDeclaration extends Translations {
  name: string
}

type Translations = {
  [key: string]: string | Translations | ((...args: unknown) => unknown)
}
