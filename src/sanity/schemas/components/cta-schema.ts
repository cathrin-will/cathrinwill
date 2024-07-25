import { defineType, defineField } from 'sanity'
import { VscInspect } from 'react-icons/vsc'

export const ctaSchema = defineType({
    name: 'cta',
    title: 'Call-to-action',
    icon: VscInspect,
    type: 'object',
    fields: [
        defineField({
            name: 'link',
            type: 'link',
        }),
        defineField({
            name: 'style',
            type: 'string',
            options: {
                list: [
                    { title: 'button', value: 'button' },
                    { title: 'link', value: 'link' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'link.label',
            internal: 'link.internal.metadata.slug.current',
            external: 'link.external',
        },
        prepare: ({ title, internal, external }) => ({
            title,
            subtitle:
                external ||
                (internal && (internal === 'index' ? '/' : `/${internal}`)),
        }),
    },
})
