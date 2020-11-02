import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

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
    font-family: $fontFamily;
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
    background-image: url("../img/background-sm.png");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      background-image: url("../img/background-tablet.png");
      padding: 5rem;
    }

    @media (min-width: 1024px) {
      background-image: url("../img/background-md.png");
    }

    @media (min-width: 1600px) {
      background-image: url("../img/background-lg.png");
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
    box-shadow: $boxShadow;
  }

  .border {
    border: $border;
  }

  .round {
    border-radius: 20px;
  }

  .centered {
    text-align: center;
  }
`;
