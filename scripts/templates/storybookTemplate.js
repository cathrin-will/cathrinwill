const componentPascalCase = (componentName) => {
    const lowerCase = componentName.toLowerCase()
    const capitalise = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    return capitalise.replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase()
    })
}

const componentSplitWord = (componentName) => {
    return componentName.replace(
        /[A-Z]/g,
        (match, offset) => (offset > 0 ? ' ' : '') + match
    )
}

const componentCamelCase = (componentName) => {
    return componentName
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase()
        })
        .replace(/\s+/g, '')
        .replace(/-/g, '')
}

const template = (componentName) => `import ${componentName} from './index';

export default {
    title: 'Components/${componentSplitWord(componentName)}',
    component: ${componentName},
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <${componentName} {...args} />;

export const ${componentCamelCase(componentName)} = Template.bind({});
${componentCamelCase(componentName)}.args = {};
`
export default template
