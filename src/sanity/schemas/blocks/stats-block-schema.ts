import { defineArrayMember, defineField } from 'sanity'
import { BiStats } from 'react-icons/bi'
import { ImStatsDots } from 'react-icons/im'
import { count, getBlockText } from '@/sanity/utils'
import { blockObject } from '../components/block-object'
export const statsBlockSchema = {
    name: 'statsBlock',
    type: 'object',
    icon: ImStatsDots,
    fields: [
        defineField({
            name: 'introContent',
            type: 'array',
            ...blockObject,
        }),
        defineField({
            name: 'githubContent',
            type: 'array',
            ...blockObject,
        }),
        defineField({
            name: 'placesWorkedStats',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    icon: BiStats,
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'repositoriesContributedTo',
                            type: 'number',
                            initialValue: 0,
                            validation: (rule) => rule.required().min(0),
                        }),
                        defineField({
                            name: 'totalPRs',
                            title: 'Total PRs',
                            type: 'number',
                            initialValue: 0,
                            validation: (rule) => rule.required().min(0),
                        }),
                        defineField({
                            name: 'totalPRContributions',
                            title: 'Total PR Reviews',
                            type: 'number',
                            initialValue: 0,
                            validation: (rule) => rule.required().min(0),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'repositoriesContributedTo',
                        },
                        prepare: ({ title, subtitle }) => ({
                            title,
                            subtitle: subtitle
                                ? `${subtitle} repositories`
                                : 'No repositories',
                        }),
                    },
                }),
            ],
        }),
        defineField({
            name: 'wakaContent',
            type: 'array',
            ...blockObject,
        }),
    ],
    preview: {
        select: {
            content: 'introContent',
            items: 'placesWorkedStats',
        },
        prepare: ({ content, items }: { content: any; items: any }) => ({
            title: content ? getBlockText(content) : 'Stats',
            subtitle: `Stats Block: ${count(items, 'item')}`,
        }),
    },
}
