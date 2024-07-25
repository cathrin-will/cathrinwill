// schemas/form.js
import { defineField, defineType } from 'sanity'
import { LuFormInput } from 'react-icons/lu'
import { fields } from './fields'
export const formSchema = defineType({
    name: 'form',
    title: 'Form',
    type: 'document',
    icon: LuFormInput,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'submitButtonText',
            type: 'string',
            initialValue: 'Submit',
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'fields',
            title: 'Fields',
            type: 'array',
            of: [...fields, { type: 'formColumns' }],
        }),
    ],
})
