import { defineType, defineField, defineArrayMember } from 'sanity'
import { PiFlagBannerDuotone } from 'react-icons/pi'

export const heroBlockSchema = defineType({
    type: 'object',
    name: 'heroBlock',
    icon: PiFlagBannerDuotone,
    fields: [
        defineField({
            type: 'string',
            name: 'title',
        }),
        defineField({
            type: 'string',
            name: 'subtitle',
        }),
        defineField({
            type: 'image',
            name: 'image',
            options: { hotspot: true },
        }),
        defineField({
            type: 'array',
            name: 'cta',
            title: 'Call to actions',
            of: [
                defineArrayMember({
                    type: 'cta',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            content: 'title',
            media: 'image',
        },
        prepare: ({ content, media }: { content: string; media: string }) => ({
            title: content ?? 'Hero Block',
            subtitle: `Hero Block`,
            media,
        }),
    },
})
