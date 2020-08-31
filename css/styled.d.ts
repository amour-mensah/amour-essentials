import 'styled-components'

interface IColors {
  primary: string;
  white: string;
  black: string;
  grey: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}