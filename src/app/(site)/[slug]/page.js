import { getPage } from '@/sanity/sanity-utils'
import Accordion from '@/components/accordion'
import Hero from '@/components/hero'

const componentMap = {
    accordion: Accordion,
    hero: Hero,
}

export const generateMetadata = async ({ params }) => {
    try {
        const page = await getPage(params.slug)
        return {
            title: page.ogTitle,
            description: page.description,
        }
    } catch (error) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist',
        }
    }
}

export default async function Page({ params }) {
    const page = await getPage(params.slug)

    return (
        <div className='flex flex-col gap-4'>
            {page && (
                <>
                    <h1 className='text-5xl font-extrabold'>{page.title}</h1>
                    {page?.components?.map((component, index) => {
                        const ComponentType = componentMap[component._type]
                        return <ComponentType key={index} {...component} />
                    })}
                </>
            )}
            {!page && (
                <div>
                    <h1 className='text-5xl font-extrabold'>404</h1>
                    <p>Page not found</p>
                </div>
            )}
        </div>
    )
}
