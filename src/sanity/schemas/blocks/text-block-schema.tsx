import { defineField, defineType } from 'sanity'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { IoIosImage } from 'react-icons/io'
import { BsTextCenter, BsTextRight } from 'react-icons/bs'
import { PiHighlighterDuotone } from 'react-icons/pi'
import { getBlockText } from '@/sanity/utils'
export const textBlockSchema = {
    name: 'textBlock',
    icon: VscSymbolKeyword,
    type: 'object',
    fields: [
        defineField({
            name: 'content',
            type: 'array',
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
                        { title: 'custom block', value: 'customBlock' },
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
                                component: (props) => (
                                    <span className='color-rajah'>
                                        {props.children}
                                    </span>
                                ),
                            },

                            {
                                title: 'Center Align',
                                value: 'centerAlign',
                                icon: BsTextCenter,
                                component: (props) => (
                                    <div className='text-center'>
                                        {props.children}
                                    </div>
                                ),
                            },
                            {
                                title: 'Right Align',
                                value: 'rightAlign',
                                icon: BsTextRight,
                                component: (props) => (
                                    <div className='text-right'>
                                        {props.children}
                                    </div>
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
                            name: 'caption',
                            type: 'text',
                            rows: 2,
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            content: 'content',
        },
        prepare: ({ content }: { content: any }) => ({
            title: getBlockText(content),
            subtitle: 'Text Block',
        }),
    },
}
