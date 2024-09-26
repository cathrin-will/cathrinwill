import { defineField } from 'sanity'
import { VscCode } from 'react-icons/vsc'

export const htmlBlockSchema = {
    name: 'htmlBlock',
    icon: VscCode,
    type: 'object',
    fields: [
        defineField({
            name: 'html',
            title: 'HTML',
            type: 'text',
            rows: 10,
        }),
    ],
    preview: {
        select: {
            content: 'html',
        },
        prepare: ({ content }: { content: string }) => ({
            title: content ?? 'HTML Block',
            subtitle: `HTML Block`,
        }),
    },
}
