module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Add a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/index.tsx',
                templateFile: 'plop-templates/component/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/{{camelCase name}}.module.scss',
                templateFile: 'plop-templates/component/Component.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/{{camelCase name}}.stories.tsx',
                templateFile: 'plop-templates/component/Component.stories.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/{{camelCase name}}.test.tsx',
                templateFile: 'plop-templates/component/Component.test.hbs',
            },
        ],
    })

    plop.setGenerator('block', {
        description: 'Add a new block',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'block name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/ui/blocks/{{camelCase name}}Block/index.tsx',
                templateFile: 'plop-templates/block/Block.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/blocks/{{camelCase name}}Block/{{camelCase name}}.module.scss',
                templateFile: 'plop-templates/block/Block.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/blocks/{{camelCase name}}Block/{{camelCase name}}.stories.tsx',
                templateFile: 'plop-templates/block/Block.stories.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/blocks/{{camelCase name}}Block/{{camelCase name}}.test.tsx',
                templateFile: 'plop-templates/block/Block.test.hbs',
            },
        ],
    })
}
