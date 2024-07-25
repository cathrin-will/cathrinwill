import { defineField } from 'sanity'
import { LuFormInput } from 'react-icons/lu'

export const formBlockSchema = {
    name: 'formBlock',
    icon: LuFormInput,
    type: 'object',
    fields: [
        defineField({
            name: 'formReference',
            type: 'reference',
            to: [{ type: 'form' }],
        }),
    ],
    preview: {
        select: {
            content: 'formReference.title',
        },
        prepare: ({ content }: { content: string }) => ({
            title: content,
            subtitle: 'Form Block',
        }),
    },
}
