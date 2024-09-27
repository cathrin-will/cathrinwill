import { getPage } from '@/sanity/queries'

import Accordion from '@/ui/blocks/accordion'
import Hero from '@/ui/blocks/hero'
import richText from '@/ui/blocks/rich-text'
import imageComponent from '@/ui/blocks/image'
import textMedia from '@/ui/blocks/text-media'

const componentMap = {
    accordion: Accordion,
    hero: Hero,
    richText: richText,
    imageComponent: imageComponent,
    textMedia: textMedia,
}

const Page = async ({ params }) => {
    const page = await getPage(params?.slug ?? '/')
    return (
        <>
            {page && (
                <div className='flex flex-col gap-4'>
                    {page?.components?.map((component, index) => {
                        const ComponentType = componentMap[component._type]
                        return (
                            <ComponentType
                                key={index}
                                {...component}
                            />
                        )
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
