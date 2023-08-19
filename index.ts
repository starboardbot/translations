import IntlMessageFormat from "intl-messageformat"
import type MessageParameters from "./types"

type Flatten<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${Flatten<T[Key]>}`
    : `${Key}`
  : never

type MetaDataKeys = "name" | "real"
export type TranslationKey = Exclude<Flatten<typeof import("./translations/en-GB.json")>, MetaDataKeys>
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
    .replace(/([^A-Z_])([A-Z])/g, (_, bef, aft) => `${bef}_${aft}`)
    .toUpperCase()
}

export default function translate<T extends TranslationKey>(key: T, locale: Locale, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): string {
  key = fixCase(key) as T
  const defaultValue = get<string>(translations, `${defaultLocale}.${key}`)
  const raw = get(
    translations,
    `${locale}.${key}`,
    defaultValue
  )
  if (!raw) throw new ReferenceError(`Unknown translation ${key}`)

  let msg: string = Array.isArray(raw) ? raw.join("\n") : raw
  // message with input
  if (msg.includes("{"))
    msg = new IntlMessageFormat(
      msg,
      msg === defaultValue ? "en-GB" : [locale, defaultLocale, "en-GB"],
      undefined,
      { ignoreTag: true, requiresOtherClause: false }
    ).format(options) as string
  return msg
}

export { translate }

export function pickTranslation<T extends TranslationKey>(
  keyOptions: Record<T, any>,
  locale: Locale,
  options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined
): string | null {
  const key = Object.keys(keyOptions).find(k => keyOptions[k as keyof typeof keyOptions]) as TranslationKey | undefined
  return key ? translate(key, locale, options) : null
}

export type Translatable = (locale: Locale) => string
export function wrapTranslation<T extends TranslationKey>(key: T, options?: T extends keyof MessageParameters ? MessageParameters[T] : undefined): Translatable {
  return (locale: Locale) => translate(key, locale, options)
}