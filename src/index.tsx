import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styled components theming
import { ThemeProvider } from 'styled-components';
import sunshine from './components/layout/theme';
import { GlobalStyles } from './components/layout/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={sunshine}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
