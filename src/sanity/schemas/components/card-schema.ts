import { defineType, defineField, defineArrayMember } from 'sanity'
import { FaAddressCard } from 'react-icons/fa6'

export const cardSchema = defineType({
    type: 'object',
    name: 'card',
    icon: FaAddressCard,
    fields: [
        defineField({
            type: 'string',
            name: 'projectName',
            title: 'Project Name',
        }),
        defineField({
            type: 'number',
            name: 'year',
        }),
        defineField({
            type: 'string',
            name: 'type',
            title: 'Type of Work',
        }),
        defineField({
            type: 'string',
            name: 'siteType',
        }),
        defineField({
            type: 'text',
            name: 'details',
        }),
        defineField({
            type: 'array',
            name: 'team',
            title: 'Team',
            of: [
                defineArrayMember({
                    type: 'string',
                }),
            ],
        }),
        defineField({
            type: 'string',
            name: 'myRole',
        }),
        defineField({
            type: 'string',
            name: 'techStack',
        }),
        defineField({
            type: 'array',
            name: 'tech',
            of: [
                defineArrayMember({
                    type: 'string',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'projectName',
            subtitle: 'year',
            type: 'type',
        },
        prepare: ({
            title,
            subtitle,
            type,
        }: {
            title: string
            subtitle: number
            type: string
        }) => ({
            title: title ?? 'Project',
            subtitle: `${subtitle} - ${type}`,
        }),
    },
})
