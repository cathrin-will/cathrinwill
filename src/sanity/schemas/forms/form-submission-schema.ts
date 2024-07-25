import { defineField, defineType } from 'sanity'

export const formSubmissionSchema = defineType({
    name: 'formSubmission',
    title: 'Form Submission',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'form',
            title: 'Reference: Form submitted',
            type: 'reference',
            readOnly: true,
            to: [
                {
                    type: 'form',
                },
            ],
        }),
        defineField({
            name: 'title',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'formData',
            title: 'Form Data',
            type: 'array',
            readOnly: true,
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'key',
                            title: 'key',
                            type: 'string',
                            readOnly: true,
                        }),
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                        }),
                    ],
                    preview: {
                        select: {
                            label: 'key',
                            value: 'value',
                        },
                        prepare: ({ label, value }) => ({
                            title: label,
                            subtitle: value,
                        }),
                    },
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            created: '_createdAt',
            formData: 'formData',
        },
        prepare: ({ title, created, formData }) => {
            const dateObj = new Date(created)
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
            }
            const formattedDate = dateObj.toLocaleString(
                'en-UK',
                options as any,
            )

            const formDataPreview = formData
                .map(
                    (item: { key: string; value: string }) =>
                        `${item.key}: ${item.value}`,
                )
                .join(', ')

            return {
                title: title,
                subtitle: `${formattedDate} - ${formDataPreview}`,
            }
        },
    },
})
