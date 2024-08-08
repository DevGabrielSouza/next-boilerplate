type LanguageCode = 'en' | 'pt'

interface LanguageConfig {
  code: LanguageCode
  name: string
  locale: string
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', locale: 'en-US' },
  { code: 'pt', name: 'Português', locale: 'pt-BR' }
]
