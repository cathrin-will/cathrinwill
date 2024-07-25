// schemas/form.js
import { defineField, defineType } from 'sanity'
import { LuFormInput } from 'react-icons/lu'

export const formTextareaSchema = defineType({
    type: 'object',
    name: 'textareaField',
    icon: LuFormInput,
    fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'name',
        }),
        defineField({
            name: 'placeholder',
            title: 'Placeholder',
            type: 'string',
        }),
        defineField({
            name: 'required',
            title: 'Required',
            type: 'boolean',
        }),
    ],

    preview: {
        select: {
            label: 'label',
        },
        prepare: ({ label }: { label: string }) => ({
            title: label,
            subtitle: 'Textarea',
        }),
    },
})
