import { defineField, defineType } from 'sanity'
import { VscFolderOpened } from 'react-icons/vsc'
import { count } from '@/sanity/utils'

export const linkListSchema = defineType({
    name: 'link.list',
    title: 'Link list',
    icon: VscFolderOpened,
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'style',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { title: 'text', value: 'text' },
                    { title: 'button', value: 'button' },
                ],
            },
            initialValue: 'text',
        }),
        defineField({
            name: 'blurb',
            type: 'text',
        }),
        defineField({
            name: 'links',
            type: 'array',
            of: [{ type: 'link' }],
        }),
    ],
    preview: {
        select: {
            title: 'label',
            links: 'links',
        },
        prepare: ({ title, links }) => ({
            title,
            subtitle: count(links, 'link'),
        }),
    },
})
