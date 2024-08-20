import { getSite } from '@/lib/sanity/queries'
import processUrl, { SITE_URL } from './processUrl'
import type { Metadata } from 'next'

export default async function processMetadata(page) {
    const site = await getSite()

    const url = processUrl(page)

    let { title, description, ogimage, noIndex } = page?.metadata ?? {
        title: 'Portfolio',
        description: 'Ann-Cathrin Will Front-end Developer Portfolio site',
        ogimage: '/images/ac.webp',
        noIndex: false,
    }
    title = `${title} | AC Will Dev`

    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        openGraph: {
            type: 'website',
            url,
            title,
            description,
            images: ogimage || site.ogimage,
        },
        robots: {
            index: !noIndex,
        },
        alternates: {
            canonical: url,
            types: {
                'application/rss+xml': '/blog/rss.xml',
            },
        },
    }
}
