import { getSite } from '@/lib/sanity/queries'
import processUrl, { SITE_URL } from './processUrl'

export default async function processMetadata(page: Sanity.Page) {
    const site = (await getSite()) as Sanity.Site
    const baseTitle = 'AC Will Dev'

    const url = processUrl(page)

    const { title, description, ogimage, noIndex } = page?.metadata ?? {
        title: 'Portfolio',
        description: 'Ann-Cathrin Will Front-end Developer Portfolio site',
        ogimage: '/images/ac.webp',
        noIndex: false,
    }

    return {
        metadataBase: new URL(SITE_URL),
        title: `${title} | ${baseTitle}`,
        description,
        openGraph: {
            type: 'website',
            siteName: baseTitle,
            url,
            title: `${title} | ${baseTitle}`,
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
