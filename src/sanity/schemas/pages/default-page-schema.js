const page = {
    name: 'page',
    title: 'Page',
    type: 'document',
    groups: [
        {
            name: 'page',
            title: 'Page Data',
            default: true,
        },
        {
            name: 'meta',
            title: 'Metadata',
        },
        {
            name: 'settings',
            title: 'Settings',
        },
    ],
    fields: [
        {
            name: 'showInTopNav',
            title: 'Show in Top Nav',
            type: 'boolean',
            group: ['settings'],
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            group: ['page'],
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            group: ['page'],
        },
        {
            name: 'components',
            title: 'Components',
            type: 'array',
            of: [
                { type: 'accordion' },
                { type: 'hero' },
                { type: 'richText' },
                { type: 'imageComponent' },
                { type: 'textMedia' },
            ],
            group: ['page'],
        },
        {
            type: 'string',
            title: 'Page Title',
            name: 'ogTitle',
            description:
                'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
            group: ['meta'],
        },
        {
            type: 'text',
            name: 'description',
            title: 'Describe This Site',
            group: ['meta'],
        },
    ],
}

export default page
