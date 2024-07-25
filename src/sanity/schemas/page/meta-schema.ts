import { defineField, defineType } from 'sanity'

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
                source: (doc: any) => doc.metadata.title || doc.title,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            description: 'Used for social sharing previews',
            type: 'image',
        }),
        defineField({
            name: 'showInTopNav',
            title: 'Show in Top Nav',
            type: 'boolean',
        }),
        defineField({
            name: 'noIndex',
            description: 'Prevent search engines from indexing this page.',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
