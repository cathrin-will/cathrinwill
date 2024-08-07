import { getSite } from '@/lib/sanity/queries'
import processUrl, { SITE_URL } from './processUrl'
import type { Metadata } from 'next'

export default async function processMetadata(page) {
    const site = await getSite()

    const url = processUrl(page)
    const { title, description, ogimage, noIndex } = page?.metadata ?? {
        title: '',
        description: '',
        ogimage: '',
        noIndex: false,
    }

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
