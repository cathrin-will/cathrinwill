import { IoIosImage } from 'react-icons/io'

export const imageBlockSchema = {
    name: 'imageBlock',
    icon: IoIosImage,
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            of: [{ type: 'block' }],
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ],
        },
    ],
    preview: {
        select: {
            content: 'image.alt',
            media: 'image',
        },
        prepare: ({ content, media }: { content: string; media: string }) => ({
            title: content ?? 'missing alt description',
            subtitle: 'Image Block',
            media,
        }),
    },
}
