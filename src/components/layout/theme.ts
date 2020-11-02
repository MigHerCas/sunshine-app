import { DefaultTheme } from 'styled-components';

export interface BaseTheme {
  colors: {
    $white: string;
    $black: string;
    $blue: string;
    $green: string;
    $orange: string;
    $darkGrey: string;
    $lightGrey: string;
    $purpleGrey: string;
    $colorBackground: string;
    $outlineBlue: string;
    $placeholder: string;
  };
  fontFamily: string;
  fontWeight: {
    $thin: number;
    $light: number;
    $regular: number;
    $medium: number;
    $semibold: number;
    $bold: number;
  };
  boxShadow: string;
  border: string;
  focusState: string;
}

export const theme: BaseTheme = {
  colors: {
    $white: '#ffffff',
    $black: '#000000',
    $blue: '#4067dc',
    $green: '#08c9a6',
    $orange: '#ffc006',
    $darkGrey: '#828282',
    $lightGrey: 'rgba(#000000, 0.03%)',
    $purpleGrey: '#a0a3bd',
    $colorBackground: '#f0f0f0',
    $outlineBlue: 'rgba(#4067dc, 8%)',
    $placeholder: '#949494',
  },
  fontFamily: `'Poppins', sans-serif;`,
  fontWeight: {
    $thin: 200,
    $light: 300,
    $regular: 400,
    $medium: 500,
    $semibold: 600,
    $bold: 700,
  },
  $boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.05)',
  $border: '1px solid rgba(64, 103, 220, 0.08)',
  $focusState: '2px solid rgba($blue, 0.6)',
};

export default theme;
