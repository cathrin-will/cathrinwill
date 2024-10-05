import { getSite } from '@/lib/sanity/queries'
import processUrl, { SITE_URL } from './processUrl'

export default async function processMetadata(page: Sanity.Page) {
    const site = (await getSite()) as Sanity.Site

    const url = processUrl(page)

    const { title, description, ogimage, noIndex } = page?.metadata ?? {
        title: 'Portfolio',
        description: 'Ann-Cathrin Will Front-end Developer Portfolio site',
        ogimage: '/images/ac.webp',
        noIndex: false,
    }

    return {
        metadataBase: new URL(SITE_URL),
        title: `${title} | AC Will Dev`,
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
