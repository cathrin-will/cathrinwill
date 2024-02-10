const imageComponent = {
    name: 'imageComponent',
    title: 'Image Component',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            of: [{ type: 'block' }],
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

export default imageComponent
