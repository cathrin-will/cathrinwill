import { getPageByID, getPage } from '@/sanity/sanity-utils'

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
    const page = params?.slug
        ? await getPage(params.slug)
        : await getPageByID('homepage')
    return (
        <>
            {page && (
                <div className='flex flex-col gap-4'>
                    {page?.components?.map((component, index) => {
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
