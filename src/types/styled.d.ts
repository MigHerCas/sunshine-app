import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      blue: string;
      green: string;
      orange: string;
      darkGrey: string;
      lightGrey: string;
      purpleGrey: string;
      colorBackground: string;
      outlineBlue: string;
      placeholder: string;
    };
    fontFamily: string;
    fontWeight: {
      thin: number;
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    boxShadow: string;
    border: string;
    focusState: string;
  }
}
