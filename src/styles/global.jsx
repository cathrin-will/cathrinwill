import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Nexa';
    src: url('../../static/fonts/nexa/nexa-bold.woff') format('woff');
    font-weight: 400;
    font-style: normal
}


@font-face {
    font-family: 'Nexa';
    src: url('../../static/fonts/nexa/nexa-light.woff') format('woff');
    font-weight: 600;
    font-style: normal
}

html {
    font-family: 'Nexa';
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

h1 {
    margin-top: 0;
}

p a {
    color: #862434 ;
    text-decoration: underline;
    text-decoration-color: #f5847a;
}
img {
    max-width: 100%;
}
.u-size-large {
    font-size: ${22 / 16}rem
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
