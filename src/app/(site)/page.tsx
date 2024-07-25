import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { metaQuery, blockQuery } from '@/lib/sanity/queries'
import Blocks from '@/ui/blocks'
import processMetadata from '@/lib/processMetadata'

export default async function Page() {
    const page = await getPage()

    return <Blocks blocks={page?.blocks} />
}

export async function generateMetadata() {
    const page = await getPage()
    return processMetadata(page)
}

async function getPage() {
    return await fetchSanity(
        groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
            ...,
            ${blockQuery},
            ${metaQuery},
        }`,
        {
            tags: ['homepage'],
        },
    )
}
