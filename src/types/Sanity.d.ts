import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityDocument } from 'next-sanity'

declare global {
    namespace Sanity {
        type SanityContent = {
            _type: string
            style: string
            children: { _type: string; text: string }[]
        }[]

        // documents

        type Site = SanityDocument<{
            title: string
            ctas?: CTA[]
            headerMenu?: Navigation
            footerMenu?: Navigation
            ctaMenu?: Navigation
            social?: Navigation
            ogimage?: string
        }>

        type Navigation = SanityDocument<{
            title: string
            items?: (Link | LinkList)[]
        }>

        type PageBase = SanityDocument<{
            title: string
            metadata: Metadata
        }>

        type Page = PageBase & {
            readonly _type: 'page'
            blocks?: Block[]
        }

        type Image = SanityImageObject &
            Partial<{
                alt: string
                loading: 'lazy' | 'eager'
                style?: string
            }>

        type Link = {
            readonly _type: 'link'
            label: string
            type: 'internal' | 'external'
            internal?: Page
            external?: string
            style?: string
        }

        type LinkList = {
            readonly _type: 'link.list'
            label: string
            style: string
            blurb?: string
            links?: Link[]
        }

        type Metadata = {
            title: string
            description: string
            slug: { current: string }
            image?: Image
            ogimage?: string
            noIndex: boolean
        }

        /* eslint-disable @typescript-eslint/no-explicit-any */
        type Block<T = any> = {
            _type: T
            _key: string
        } & T

        // blocks
        type AccordionBlock = {
            content: SanityContent
            items: { summary: string; details: SanityContent }[]
            wrapIt?: boolean
        }

        type CreativeBlock = {
            content: SanityContent
            columns?: [{ percentageWidth?: number; subModules?: Block[] }]
            columnsNumber?: number
            alignItems?: string
            wrapIt?: boolean
        }

        //  form

        type FormMessage = {
            type: 'error' | 'success'
            content: string
            show: boolean
        }

        type FormField = {
            inputType?: string
            label: string
            required?: boolean
            name: { current: string; _type: string }
            options?: string[]
            placeholder: string
            _key: string
            _type: string
        }

        type FormBlock = {
            formReference: {
                _id: string
                title: string
                description: SanityContent
                submitButtonText: string
                fields: FormField[]
            }
            wrapIt?: boolean
        }

        type ImageBlock = {
            image: Image
            wrapIt?: boolean
        }

        type SkillsBlock = {
            content: SanityContent
        }

        type TextBlock = {
            content: SanityContent
            themed?: boolean
            wrapIt?: boolean
            children?: ReactNode
        }

        type StatsBlock = {
            introContent: SanityContent
            githubContent: SanityContent
            wakaContent: SanityContent
            placesWorkedStats: {
                repositoriesContributedTo: number
                totalPRContributions: number
                totalPRs: number
                name: string
            }[]
            wrapIt?: boolean
        }

        type SliderBlock = {
            content: SanityContent
            images: Image[]
            wrapIt?: boolean
        }

        type CardsBlock = {
            content?: SanityContent
            wrapIt?: boolean
            cards?: {
                title: string
                year: number
                type: string
                siteType: string
                details: string
                myRole: string
                techStack: string
                team: string[]
                tech: string[]
            }[]
        }
    }
}

export {}
