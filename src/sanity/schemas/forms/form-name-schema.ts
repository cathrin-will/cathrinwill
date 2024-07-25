// schemas/form.js
import { defineField, defineType } from 'sanity'
import { LuFormInput } from 'react-icons/lu'

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
        source: (doc: any, context: any) => context.parent.label,
    },
    validation: (Rule) =>
        Rule.required().custom((value) => {
            if (String(value?.current).match(/^[A-Za-z]+[0-9A-Za-z_]*$/)) {
                return true
            }

            return 'Name must only contain letters, numbers, and underscores'
        }),
})
