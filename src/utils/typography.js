import Typography from 'typography'
import githubTheme from 'typography-theme-github'

// oceanGateTheme.overrideThemeStyles = () => ({
//     'h1, h2, h3': {
//         marginTop: 0
//     },
//     body: {
//         FontFamily: 'HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, sans-serif'
//         // FontSmoothing: 'antialiased'
//     },
//     a: {
//         textShadow: 'none'
//     }
// })
const typography = new Typography(githubTheme)
// const typography = new Typography({
//     baseFontSize: '18px',
//     baseLineHeight: 1.666,
//     headerFontFamily: ['Nexa', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
//     bodyFontFamily: ['Nexa', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica, Arial, sans-serif']
// })

export const { scale, rhythm, options } = typography
export default typography
