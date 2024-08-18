import { VscVscode } from 'react-icons/vsc'

import { getBlockText } from '@/sanity/utils'
import { blockField } from '../components/block-object'
export const skillsBlockSchema = {
    name: 'skillsBlock',
    icon: VscVscode,
    type: 'object',
    fields: blockField,
    preview: {
        select: {
            content: 'content',
        },
        prepare: ({ content }: { content: any }) => ({
            title: getBlockText(content),
            subtitle: 'Skills Block',
        }),
    },
}
