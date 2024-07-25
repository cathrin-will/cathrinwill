// schemas/form.js
import { defineField, defineType } from 'sanity'
import { LuFormInput } from 'react-icons/lu'

export const formInputSchema = defineType({
    type: 'object',
    name: 'inputField',
    icon: LuFormInput,
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
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
        defineField({
            name: 'inputType',
            title: 'Input Type',
            type: 'string',
            initialValue: 'text',
            options: {
                layout: 'dropdown',
                list: [
                    { value: 'text', title: 'Text input' },
                    { value: 'email', title: 'Email' },
                    { value: 'phone', title: 'Phone number' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            label: 'label',
        },
        prepare: ({ label }: { label: string }) => ({
            title: label,
            subtitle: 'Input',
        }),
    },
})
