import { VscSymbolKeyword } from 'react-icons/vsc'
import { getBlockText } from '@/sanity/utils'
import { blockField } from '../components/block-object'
export const textBlockSchema = {
    name: 'textBlock',
    icon: VscSymbolKeyword,
    type: 'object',
    fields: blockField,
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
