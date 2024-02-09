const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ],
        },
    ],
}

export default hero
