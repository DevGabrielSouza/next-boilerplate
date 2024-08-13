export type LanguageCode = 'en' | 'pt' | 'es' | 'fr'

export interface LanguageConfig {
  code: LanguageCode
  name: string
  locale: string
}

export interface I18nConfig {
  locales: string[]
  defaultLocale: string
  localeDetection: boolean
}
