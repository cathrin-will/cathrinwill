import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { metaQuery, blockQuery } from '@/lib/sanity/queries'
import { notFound } from 'next/navigation'
import Blocks from '@/ui/blocks'
import processMetadata from '@/lib/processMetadata'

interface PageProps {
    params: {
        slug?: string[]
    }
}

export default async function Page({ params }: PageProps) {
    const slug = params.slug?.join('/')
    const page = await getPage({ slug })

    if (!page) {
        notFound()
    }

    return <Blocks blocks={page?.blocks} />
}

export async function generateMetadata({ params }: PageProps) {
    const slug = params.slug?.join('/')
    const page = await getPage({ slug })
    if (!page) notFound()
    return processMetadata(page)
}

export async function generateStaticParams() {
    const slugs = await fetchSanity<string[]>(
        groq`*[
            _type == 'page' &&
            defined(metadata.slug.current) &&
            !(metadata.slug.current in ['index', '404'])
        ].metadata.slug.current`,
    )

    const paths = slugs.map((slug) => ({
        slug: slug?.split('/'),
    }))
    return [paths]
}

async function getPage(params: Props['params']) {
    return await fetchSanity<Sanity.Page>(
        groq`*[
            _type == 'page' &&
            metadata.slug.current == $slug &&
            !(metadata.slug.current in ['index', '404'])
        ][0]{
            ...,
            ${blockQuery},
            ${metaQuery},
        }`,
        {
            params: { slug: params.slug },
            tags: ['pages'],
        },
    )
}

type Props = {
    params: { slug?: string }
}
