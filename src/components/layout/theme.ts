import { DefaultTheme, css } from 'styled-components';

export const theme: DefaultTheme = {
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
  fonts: {
    default: css`
      $fontFamily: 'Poppins', sans-serif;
    `,
  },
  fontWeight: {
    $thin: 200,
    $light: 300,
    $regular: 400,
    $medium: 500,
    $semibold: 600,
    $bold: 700,
  },
};

export default theme;
