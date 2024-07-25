import { defineType, defineField, defineArrayMember } from 'sanity'
import { IoIosCog } from 'react-icons/io'
import { RiPagesFill } from 'react-icons/ri'
import { RiPagesLine } from 'react-icons/ri'
import { blocks } from './../blocks'

export const pageSchema = defineType({
    type: 'document',
    name: 'page',
    groups: [
        {
            name: 'content',
            icon: RiPagesFill,
            default: true,
        },
        {
            name: 'metadata',
            icon: IoIosCog,
        },
    ],
    fields: [
        defineField({
            type: 'array',
            name: 'blocks',
            title: 'Page blocks',
            group: ['content'],
            of: [
                ...blocks,
                defineArrayMember({
                    type: 'creativeBlock',
                }),
            ],
        }),
        defineField({
            name: 'metadata',
            type: 'metadata',
            group: ['metadata'],
        }),
    ],
    preview: {
        select: {
            title: 'metadata.title',
            slug: 'metadata.slug.current',
            media: 'metadata.image',
        },
        prepare: ({ title, slug }) => ({
            title,
            subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
            media: RiPagesLine,
        }),
    },
})
