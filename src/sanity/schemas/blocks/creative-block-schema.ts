import { defineArrayMember, defineField, defineType } from 'sanity'
import { count, getBlockText } from '@/sanity/utils'
import { blocks } from './../blocks'
import { VscExtensions } from 'react-icons/vsc'
import { blockObject } from '../components/block-object'
export const creativeBlockSchema = defineType({
    name: 'creativeBlock',
    icon: VscExtensions,
    type: 'object',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'options', title: 'Options' },
    ],
    fieldsets: [
        { name: 'alignment', title: 'Alignment', options: { columns: 2 } },
    ],
    fields: [
        defineField({
            name: 'content',
            group: 'content',
            type: 'array',
            ...blockObject,
        }),
        defineField({
            name: 'columnsNumber',
            type: 'number',
            description:
                'If set will override any percentages set for individual columns',
            group: 'options',
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
                            name: 'subModules',
                            type: 'array',
                            of: [...blocks],
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
                            subModules: 'subModules',
                        },
                        prepare: ({ subModules }) => {
                            return {
                                title: subModules
                                    .map(
                                        (subModule: {
                                            title: string
                                            name: string
                                            _type: string
                                        }) =>
                                            subModule.title ||
                                            subModule.name ||
                                            subModule._type,
                                    )
                                    .filter(Boolean)
                                    .join(' + '),
                            }
                        },
                    },
                }),
            ],
            group: 'content',
        }),

        defineField({
            name: 'alignItems',
            title: 'Vertical alignment',
            type: 'string',
            options: {
                list: [
                    { title: 'Top', value: 'start' },
                    'center',
                    { title: 'Bottom', value: 'end' },
                ],
            },
            initialValue: 'center',
            group: 'options',
            fieldset: 'alignment',
        }),
    ],
    preview: {
        select: {
            content: 'content',
            col: 'columns',
        },
        prepare: ({ content, col }) => ({
            title: content ? getBlockText(content) : 'Creative Block',
            subtitle: `Creative Block: ${count(col, 'column')}`,
        }),
    },
})
