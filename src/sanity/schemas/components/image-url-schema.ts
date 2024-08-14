import { defineType, defineField } from 'sanity'
import { IoImageOutline } from 'react-icons/io5'

export const imageUrlSchema = defineType({
    name: 'imageUrl',
    icon: IoImageOutline,
    type: 'object',
    fields: [
        defineField({
            name: 'src',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'alt',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'width',
            type: 'number',
            initialValue: 200,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'height',
            type: 'number',
            initialValue: 200,
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'src',
            subtitle: 'alt',
        },
        prepare: ({ title, subtitle }) => ({
            title,
            subtitle,
        }),
    },
})
