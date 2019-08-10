import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(135deg, rgba(125, 185, 232, 0) 0%, rgba(125, 185, 232, 0) 49%, rgba(125, 185, 232, 0.98) 99%, rgba(125, 185, 232, 1) 100%);
}

img {
    max-width: 100%;
}

p:last-child {
    margin-bottom: 0;
}
#___gatsby {
    min-height: 100vh
}
#gatsby-focus-wrapper {
    min-height: 100vh
}
`

export default GlobalStyle
