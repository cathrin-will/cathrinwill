// schemas/form.js
import { defineField, defineType } from 'sanity'
import { LuFormInput } from 'react-icons/lu'

export const formRadioSchema = defineType({
    type: 'object',
    name: 'radioField',
    title: 'Radio Field',
    icon: LuFormInput,
    fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'name',
        }),
        defineField({
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [{ type: 'string' }],
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
            subtitle: 'Radio',
        }),
    },
})
