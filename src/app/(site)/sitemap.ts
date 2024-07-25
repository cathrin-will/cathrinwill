import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { SITE_URL } from '@/lib/processUrl'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allPages = await fetchSanity<Record<string, MetadataRoute.Sitemap>>(
        groq`{
            'pages': *[
                _type == 'page' &&
                !(metadata.slug.current in ['404']) &&
                metadata.noIndex != true
            ]|order(metadata.slug.current){
                'url': $baseUrl + select(metadata.slug.current == 'index' => '', metadata.slug.current),
                'lastModified': _updatedAt,
                'priority': select(
                    metadata.slug.current == 'index' => 1,
                    0.5
                ),
            },
        }`,
        {
            params: {
                baseUrl: SITE_URL + '/',
            },
        },
    )

    return Object.values(allPages).flat()
}
