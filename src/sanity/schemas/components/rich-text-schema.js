const richText = {
    name: 'richText',
    title: 'Rich text',
    type: 'object',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}

export default richText
