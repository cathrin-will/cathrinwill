const kebabCase = (componentName) => {
    return componentName.replace(
        /[A-Z]/g,
        (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()
    )
}

const template = (componentName) =>
    `@import '../../styles/settings.scss';

.${kebabCase(componentName)} {
    $this: &;
}`
export default template
