import 'styled-components'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export type defaultTheme = ThemeType
}
