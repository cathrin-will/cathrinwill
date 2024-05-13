import { TextIcon } from '@sanity/icons'
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
            icon: TextIcon,
            // styles: [{ title: 'test', value: 'span' }],
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
            ],
        },
    ],
}

export default richText
