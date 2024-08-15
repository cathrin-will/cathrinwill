import { Container } from '@/ui/layout/container'
import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityDocument } from 'next-sanity'

declare global {
    namespace Sanity {
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

        // components

        type Section = {
            children: ReactNode
            className?: string
        }

        type Container = {
            children: ReactNode
            className?: string
        }

        type Button = {
            link?: Link
            style?: string
        }

        type Image = SanityImageObject &
            Partial<{
                alt: string
                loading: 'lazy' | 'eager'
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

        // stats data

        type StatsData = {
            viewer: {
                contributionsCollection: {
                    totalPullRequestReviewContributions: number
                }
                pullRequests: {
                    totalCount: number
                }
                repositoriesContributedTo: {
                    totalCount: number
                }
            }
            rateLimit: {
                remaining: number
            }
        }
        type TotalStatsData = {
            prs: 0
            reviews: 0
            repos: 0
        }
    }
}

export {}
