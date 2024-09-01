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
                templateFile: 'plop-templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/{{camelCase name}}.module.scss',
                templateFile: 'plop-templates/Component.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/{{camelCase name}}.stories.tsx',
                templateFile: 'plop-templates/Component.stories.hbs',
            },
            {
                type: 'add',
                path: 'src/ui/components/{{camelCase name}}/{{camelCase name}}.test.tsx',
                templateFile: 'plop-templates/Component.test.hbs',
            },
        ],
    })
}
