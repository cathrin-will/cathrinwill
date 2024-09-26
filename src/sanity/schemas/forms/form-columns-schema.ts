// schemas/form.js
import { defineField, defineType, defineArrayMember } from 'sanity'
import { count } from '@/sanity/utils'
import { HiViewColumns } from 'react-icons/hi2'
import { fields } from './fields'

export const formColumnsSchema = defineType({
    type: 'object',
    name: 'formColumns',
    icon: HiViewColumns,
    fields: [
        defineField({
            name: 'columnsNumber',
            type: 'number',
            description:
                'If set will override any percentages set for individual columns',

            validation: (Rule) => Rule.min(1).max(12).integer(),
        }),
        defineField({
            name: 'columns',
            type: 'array',
            of: [
                defineArrayMember({
                    title: 'column',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'fields',
                            type: 'array',
                            of: [...fields],
                        }),
                        defineField({
                            name: 'percentageWidth',
                            title: 'Percentage width ',
                            description:
                                'Leave empty if you want to use the default width',
                            type: 'number',
                            validation: (Rule) =>
                                Rule.min(1).max(100).integer(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'fields',
                        },
                        prepare: ({ title }) => {
                            return {
                                title: title
                                    .map(
                                        (field: {
                                            label: string
                                            _type: string
                                        }) => field.label || field._type,
                                    )
                                    .filter(Boolean)
                                    .join(' + '),
                            }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'fields.label',
            col: 'columns',
        },
        prepare: ({ title, col }: { title: string; col: [] }) => ({
            title: title,
            subtitle: `Form Columns: ${count(col, 'column')} `,
        }),
    },
})
