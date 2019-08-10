import Typography from 'typography'
import oceanGateTheme from 'typography-theme-ocean-beach'

oceanGateTheme.overrideThemeStyles = () => ({
    'h1, h2, h3': {
        marginTop: 0
    },
    a: {
        textShadow: 'none'
    }
})
const typography = new Typography(oceanGateTheme)
export const { scale, rhythm, options } = typography
export default typography
