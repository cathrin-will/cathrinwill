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

        type Block<T = any> = {
            _type: T
            _key: string
        } & T

        // blocks
        type accordionBlock = {
            content: SanityContent
            items: { summary: string; details: SanityContent }[]
            wrapIt?: boolean
        }

        type creativeBlock = {
            content: SanityContent
            columns?: [{ percentageWidth?: number; subModules?: Block[] }]
            columnsNumber?: number
            alignItems?: string
            wrapIt?: boolean
        }

        type formBlock = {
            formReference: {
                _id: string
                title: string
                description: string
                submitButtonText: string
                fields: []
            }
            wrapIt?: boolean
        }

        type imageBlock = {
            image: Image
            wrapIt?: boolean
        }

        type skillsBlock = {
            content: SanityContent
        }

        type textBlock = {
            content: SanityContent
            themed?: boolean
            wrapIt?: boolean
            children?: ReactNode
        }

        type statsBlock = {
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

        type sliderBlock = {
            content: SanityContent
            images: Image[]
            wrapIt?: boolean
        }

        type cardsBlock = {
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
