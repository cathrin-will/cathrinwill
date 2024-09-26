import { defineType, defineField } from 'sanity'
import { CiGrid42 } from 'react-icons/ci'
import { blockField } from '../components/block-object'
import { count } from '@/sanity/utils'

export const cardsBlockSchema = defineType({
    type: 'object',
    name: 'cardsBlock',
    icon: CiGrid42,
    fields: [
        ...blockField,
        defineField({
            name: 'cards',
            type: 'array',
            of: [{ type: 'card' }],
            title: 'Cards',
        }),
    ],
    preview: {
        select: {
            cards: 'cards',
        },
        prepare: ({ cards }: { cards: Array<unknown> }) => {
            return {
                title: 'Cards Block',
                subtitle: count(cards),
            }
        },
    },
})
