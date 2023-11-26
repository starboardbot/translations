import IntlMessageFormat from "intl-messageformat"
import type MessageParameters from "./types"

type Flatten<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${Flatten<T[Key]>}`
    : `${Key}`
  : never

type MetaDataKeys = "name" | "real"
export type TranslationKey = Exclude<Flatten<typeof import("./translations/en-GB.json")>, MetaDataKeys>
export type TranslationKeyWithoutParameters = Exclude<TranslationKey, keyof MessageParameters>
export const locales = <const>["en-GB"] // , "en-US", "es_ES"
export const defaultLocale = "en-GB"
export type Locale = typeof locales[number]

export const translations = Object.fromEntries(
  locales.map(locale => [locale, require(`./translations/${locale}`)])
) as Record<Locale, typeof import("./translations/en-GB.json")>

function get<T>(object: any, path: string): T | undefined
function get<T>(object: any, path: string, defaultValue: T): T
function get<T>(object: any, path: string, defaultValue?: T): T | undefined {
  for (const p of path.split(".")) {
    object = object[p]
    if (object == null) return defaultValue
  }
  return object
}
function fixCase(key: string): string {
  return key
    .replace(/ +|-/g, "_")
    .replace(/([a-z])([A-Z])/g, (_, bef, aft) => `${bef}_${aft}`)
    .toUpperCase()
}

export default translate

/** Get a translation that contains intl context variables. */
function translate<T extends keyof MessageParameters>(key: T, locale: Locale, options: MessageParameters[T]): string
/** Get a simple translation with no variables. */
function translate<T extends Exclude<TranslationKey, keyof MessageParameters>>(key: T, locale: Locale): string
/** Get a translation (usually unknown) with or without context variables. */
function translate<T extends TranslationKey>(key: T, locale: Locale, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): string
function translate<T extends TranslationKey>(key: T, locale: Locale, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): string {
  key = fixCase(key) as T
  const defaultValue = get<string>(translations, `${defaultLocale}.${key}`)
  const raw = get(
    translations,
    `${locale}.${key}`,
    defaultValue
  )
  if (!raw) throw new ReferenceError(`Unknown translation ${key}`)

  let msg: string = Array.isArray(raw) ? raw.join("") : raw
  // message with input
  if (msg.includes("{"))
    msg = (
      new IntlMessageFormat(msg, msg === defaultValue ? "en-GB" : [locale, defaultLocale, "en-GB"], undefined, {
        ignoreTag: true,
        requiresOtherClause: false,
      }).format(options) as string
    ).replace(/ +/, " ")
  return msg
}

export { translate }

/**
 * Pick the first translation key in the object that is truthy.
 * @example
 * ```js
 * let choice = 1
 * pickTranslation({
 *   HELLO_WORLD: choice === 0,
 *   DELETE: choice === 1,
 *   NO: choice >= 1,
 * }) // DELETE
 * // choice = 2 -> NO
 * ```
 */
export function pickTranslation<T extends TranslationKey>(
  keyOptions: Record<T, any>,
  locale: Locale,
  options: T extends keyof MessageParameters ? MessageParameters[T] : undefined
): string | null {
  const key = Object.keys(keyOptions).find(k => keyOptions[k as keyof typeof keyOptions]) as TranslationKey | undefined
  return key ? translate(key, locale, options) : null
}

export type Translatable = (locale: Locale) => string
/** Wrap a translation for when the locale is unknown at the time. */
export function wrapTranslation<T extends keyof MessageParameters>(key: T, options: MessageParameters[T]): Translatable
export function wrapTranslation<T extends Exclude<TranslationKey, keyof MessageParameters>>(key: T): Translatable
export function wrapTranslation<T extends TranslationKey>(key: T, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): Translatable
export function wrapTranslation<T extends TranslationKey>(key: T, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): Translatable {
  return (locale: Locale) => translate(key, locale, options)
}

/** Check if a translation key exists. */
export function translationExists(key: string): key is TranslationKey {
  key = fixCase(key)
  return get<string>(translations, `${defaultLocale}.${key}`) !== undefined
}

/** Wrap a locale for easier translations. */
export function wrapLocale(locale: Locale) {
  /** Get a translation that contains intl context variables. */
  function translateWrapped<T extends keyof MessageParameters>(key: T, options: MessageParameters[T]): string
  /** Get a simple translation with no variables. */
  function translateWrapped<T extends Exclude<TranslationKey, keyof MessageParameters>>(key: T): string
  /** Get a translation (usually unknown) with or without context variables. */
  function translateWrapped<T extends TranslationKey>(key: T, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): string
  function translateWrapped<T extends TranslationKey>(key: T, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): string {
    return translate(key, locale, options)
  }
  return translateWrapped
}