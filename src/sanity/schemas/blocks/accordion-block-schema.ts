import { defineArrayMember, defineField } from 'sanity'
import { TfiLayoutAccordionMerged } from 'react-icons/tfi'
import { count, getBlockText } from '@/sanity/utils'

export const accordionBlockSchema = {
    name: 'accordionBlock',
    type: 'object',
    icon: TfiLayoutAccordionMerged,
    fields: [
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'items',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    icon: TfiLayoutAccordionMerged,
                    fields: [
                        defineField({
                            name: 'summary',
                            type: 'string',
                        }),
                        defineField({
                            name: 'details',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'summary',
                            answer: 'details',
                        },
                        prepare: ({ title, answer }) => ({
                            title,
                            subtitle: getBlockText(answer),
                        }),
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            content: 'content',
            items: 'items',
        },
        prepare: ({
            content,
            items,
        }: {
            content: Sanity.SanityContent
            items: []
        }) => ({
            title: content ? getBlockText(content) : 'Accordion',
            subtitle: `Accordion Block: ${count(items, 'item')}`,
        }),
    },
}
