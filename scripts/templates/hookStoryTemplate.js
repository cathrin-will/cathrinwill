const template = (componentName) =>
    `import { Meta } from '@storybook/addon-docs'

<Meta title="Developers/Hooks/${componentName}" />

# ${componentName}

`

export default template
