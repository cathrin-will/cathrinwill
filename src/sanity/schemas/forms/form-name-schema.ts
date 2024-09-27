import { SanityDocument } from 'next-sanity'
import { defineType, SlugSourceContext } from 'sanity'

export const formNameSchema = defineType({
    name: 'name',
    title: 'Name',
    type: 'slug',
    description:
        'Name must only contain letters, numbers, and underscores, start with a letter and it should be unique on this form',
    options: {
        slugify: (input) =>
            input
                .toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^0-9a-z_]/g, '')
                .slice(0, 200),
        source: (doc: SanityDocument, context: SlugSourceContext) =>
            // @ts-expect-error - sanity doesn't know the parent has label - not sure how to bypass that
            `${doc.title}_${context.parent.label}`,
    },

    validation: (Rule) =>
        Rule.required().custom((value) => {
            if (String(value?.current).match(/^[A-Za-z]+[0-9A-Za-z_]*$/)) {
                return true
            }

            return 'Name must only contain letters, numbers, and underscores'
        }),
})
