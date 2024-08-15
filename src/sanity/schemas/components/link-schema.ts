import { defineField, defineType } from 'sanity'
import { VscLink } from 'react-icons/vsc'

export const linkSchema = defineType({
    name: 'link',
    title: 'Link',
    icon: VscLink,
    type: 'object',
    options: {
        columns: 1,
    },
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'type',
            type: 'string',
            options: {
                layout: 'radio',
                list: [
                    { title: 'internal', value: 'internal' },
                    { title: 'external', value: 'external' },
                ],
            },
            initialValue: 'internal',
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
            name: 'internal',
            type: 'reference',
            to: [{ type: 'page' }],
            hidden: ({ parent }) => parent?.type !== 'internal',
        }),
        defineField({
            name: 'external',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                    allowRelative: true,
                }),
            hidden: ({ parent }) => parent?.type !== 'external',
        }),
    ],
    preview: {
        select: {
            label: 'label',
            _type: 'internal._type',
            title: 'internal.title',
            slug: 'internal.metadata.slug.current',
            external: 'external',
            params: 'params',
        },
        prepare: ({ label, _type, title, slug, external, params }) => ({
            title: label || title,
            subtitle: [
                _type === null,
                external || (slug && (slug === 'index' ? '/' : `/${slug}`)),
                params,
            ]
                .filter(Boolean)
                .join(''),
        }),
    },
})
