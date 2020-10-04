import 'styled-components';

interface IColors {
  primary: string;
  light: string;
  white: string;
  black: string;
  grey: string;
  lightGrey: string;
  amazonOrange: string;
}

interface IFonts {
  primary: string;
  secondary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    fonts: IFonts;
  }
}
