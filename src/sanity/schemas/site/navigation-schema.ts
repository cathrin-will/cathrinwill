import { defineField, defineType } from 'sanity'
import { VscSymbolClass } from 'react-icons/vsc'
import { count } from '@/sanity/utils'

export const navigationSchema = defineType({
    name: 'navigation',
    title: 'Navigation',
    icon: VscSymbolClass,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'items',
            type: 'array',
            of: [{ type: 'link' }, { type: 'link.list' }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            items: 'items',
        },
        prepare: ({ title, items }) => ({
            title,
            subtitle: count(items),
        }),
    },
})
