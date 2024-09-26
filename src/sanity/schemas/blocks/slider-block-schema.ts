import { defineType, defineField, defineArrayMember } from 'sanity'
import { TfiLayoutSlider } from 'react-icons/tfi'
import { count, getBlockText } from '@/sanity/utils'

export const sliderBlockSchema = defineType({
    type: 'object',
    name: 'sliderBlock',
    icon: TfiLayoutSlider,
    title: 'Slider Block',
    fields: [
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            type: 'array',
            name: 'images',
            of: [
                defineArrayMember({
                    type: 'image',
                    fields: [
                        {
                            type: 'string',
                            name: 'caption',
                        },
                    ],
                    options: { hotspot: true },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            items: 'images',
            content: 'content',
            media: 'images.0',
        },

        prepare: ({
            content,
            media,
            items,
        }: {
            content: Sanity.SanityContent
            media: string
            items: []
        }) => ({
            title: content ? getBlockText(content) : 'Slider',
            subtitle: `Slider Block: ${count(items, 'slide')}`,
            media,
        }),
    },
})
