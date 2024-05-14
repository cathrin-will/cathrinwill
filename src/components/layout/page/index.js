import { draftMode } from 'next/headers'
import { loadQuery } from '@/sanity/lib/store'
import { getPage, PAGE_QUERY, PAGES_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'

// components
import Accordion from '@/components/blocks/accordion'
import Hero from '@/components/blocks/hero'
import richText from '@/components/blocks/rich-text'
import imageComponent from '@/components/blocks/image'
import textMedia from '@/components/blocks/text-media'

const componentMap = {
    accordion: Accordion,
    hero: Hero,
    richText: richText,
    imageComponent: imageComponent,
    textMedia: textMedia,
}

const Page = async ({ params }) => {
    params ??= { slug: '/' }

    // const pagex = await getPage(params.slug)
    const page = await loadQuery(PAGE_QUERY, params, {
        perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    })

    console.log(page)

    return (
        <>
            {draftMode().isEnabled ? (
                <h1 className='text-5xl font-extrabold'>{page.title}</h1>
            ) : (
                <h1 className='text-5xl font-extrabold'>{page.data?.title}</h1>
            )}
            {page && (
                <div className='flex flex-col gap-4'>
                    {page.data?.components?.map((component, index) => {
                        const ComponentType = componentMap[component._type]
                        return <ComponentType key={index} {...component} />
                    })}
                </div>
            )}
            {!page && (
                <div>
                    <h1 className='text-5xl font-extrabold'>404</h1>
                    <p>Page not found</p>
                </div>
            )}
        </>
    )
}
export default Page
