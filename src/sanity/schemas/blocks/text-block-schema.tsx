import { VscSymbolKeyword } from 'react-icons/vsc'
import { getBlockText } from '@/sanity/utils'
import { blockObject } from '../components/block-object'
import { defineField } from 'sanity'
export const textBlockSchema = {
    name: 'textBlock',
    icon: VscSymbolKeyword,
    type: 'object',
    fields: [
        defineField({
            name: 'themed',
            type: 'boolean',
        }),
        defineField({
            name: 'content',
            type: 'array',
            ...blockObject,
        }),
    ],
    preview: {
        select: {
            content: 'content',
        },
        prepare: ({ content }: { content: any }) => ({
            title: getBlockText(content),
            subtitle: 'Text Block',
        }),
    },
}
