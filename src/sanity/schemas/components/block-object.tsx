import { defineField, defineType } from 'sanity'
import { BsTextCenter, BsTextRight } from 'react-icons/bs'
import { PiHighlighterDuotone } from 'react-icons/pi'
import { IoIosImage } from 'react-icons/io'

export const blockObject = {
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
                { title: 'Heading 4', value: 'h4' },
                { title: 'Heading 5', value: 'h5' },
                { title: 'Heading 6', value: 'h6' },
                { title: 'Quote', value: 'blockquote' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    {
                        title: 'Highlight',
                        value: 'highlight',
                        icon: PiHighlighterDuotone,
                        component: (props: { children: React.ReactNode }) => (
                            <span className='color-rajah'>
                                {props.children}
                            </span>
                        ),
                    },

                    {
                        title: 'Center Align',
                        value: 'centerAlign',
                        icon: BsTextCenter,
                        component: (props: { children: React.ReactNode }) => (
                            <div className='text-center'>{props.children}</div>
                        ),
                    },
                    {
                        title: 'Right Align',
                        value: 'rightAlign',
                        icon: BsTextRight,
                        component: (props: { children: React.ReactNode }) => (
                            <div className='text-right'>{props.children}</div>
                        ),
                    },
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'type',
                                type: 'string',
                                options: {
                                    layout: 'radio',
                                    list: [
                                        {
                                            title: 'internal',
                                            value: 'internal',
                                        },
                                        {
                                            title: 'external',
                                            value: 'external',
                                        },
                                    ],
                                },
                                initialValue: 'internal',
                            }),
                            defineField({
                                name: 'style',
                                type: 'string',
                                initialValue: 'text',
                                options: {
                                    layout: 'radio',
                                    direction: 'horizontal',
                                    list: [
                                        {
                                            title: 'text',
                                            value: 'text',
                                        },
                                        {
                                            title: 'button',
                                            value: 'button',
                                        },
                                    ],
                                },
                            }),
                            defineField({
                                name: 'internal',
                                type: 'reference',
                                to: [{ type: 'page' }],
                                hidden: ({ parent }) =>
                                    parent?.type !== 'internal',
                            }),
                            defineField({
                                name: 'external',
                                type: 'url',
                                validation: (Rule) =>
                                    Rule.uri({
                                        scheme: [
                                            'http',
                                            'https',
                                            'mailto',
                                            'tel',
                                        ],
                                        allowRelative: true,
                                    }),
                                hidden: ({ parent }) =>
                                    parent?.type !== 'external',
                            }),
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            icon: IoIosImage,
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                }),
                defineField({
                    name: 'style',
                    type: 'string',
                    options: {
                        layout: 'dropdown',
                        list: [
                            { title: 'default', value: 'default' },
                            { title: 'profile', value: 'profile' },
                        ],
                    },
                    initialValue: 'default',
                }),
            ],
        },
    ],
}

export const blockField = [
    defineField({
        name: 'content',
        type: 'array',
        ...blockObject,
    }),
]
