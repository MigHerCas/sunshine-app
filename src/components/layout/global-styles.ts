import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const backgroundAssets = {
  backgroundSm: '/background/background-sm.png',
  backgroundMd: '/background/background-md.png',
  backgroundLg: '/background/background-lg.png',
  backgroundTablet: '/background/background-tablet.png',
};

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }

  html,
  body {
    min-height: 100vh;
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    padding: 3rem;
    background-color: ${(props) => props.theme.colors.colorBackground};
    background-image: url(${backgroundAssets.backgroundSm});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      background-image: url(${backgroundAssets.backgroundTablet});
      padding: 5rem;
    }

    @media (min-width: 1024px) {
      background-image: url(${backgroundAssets.backgroundMd});
    }

    @media (min-width: 1600px) {
      background-image: url(${backgroundAssets.backgroundLg});
    }
  }

  /*
    * Reset top margins on titles that are first-child.
    */
  h1,
  h2,
  h3 {
    &:first-child {
      margin-top: 0;
    }
  }

  /*
    * Reset top margins on titles that are first-child.
    */

  img {
    height: auto;
    max-width: 100%;

    @media print {
      /* Force display none on imagse when printing */
      display: none !important;
    }
  }

  // Utils classes
  .shadow {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  .border {
    border: ${(props) => props.theme.border};
  }

  .round {
    border-radius: 20px;
  }

  .centered {
    text-align: center;
  }
`;
