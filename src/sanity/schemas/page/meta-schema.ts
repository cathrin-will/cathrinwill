import { defineField, defineType } from 'sanity'
import { SanityDocument } from '@sanity/client'

export const metaSchema = defineType({
    name: 'metadata',
    title: 'Metadata',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.max(60).warning(),
        }),
        defineField({
            name: 'description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(160).warning(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: (doc: SanityDocument) =>
                    (doc.metadata?.title as string) || (doc.title as string),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            description: 'Used for social sharing previews',
            type: 'image',
        }),
        defineField({
            name: 'noIndex',
            description: 'Prevent search engines from indexing this page.',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
