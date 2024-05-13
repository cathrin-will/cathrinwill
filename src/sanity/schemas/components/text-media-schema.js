import { TextIcon } from '@sanity/icons'
const textAndMedia = {
    name: 'textMedia',
    title: 'Text and Media',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
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
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}

export default textAndMedia
