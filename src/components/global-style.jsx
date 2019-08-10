import { createGlobalStyle } from 'styled-components';
import theme from '../theme.json';

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 100%;
        font-family: ${theme.typography.primaryFont};
    }
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
