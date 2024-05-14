import { getPage } from '@/sanity/queries'

const Meta = async ({ params }) => {
    try {
        const page = await getPage(params.slug ?? '/')

        return {
            title: page.ogTitle ?? 'Ann-Cathrin Will | Frontend Developer',
            description: page.description,
        }
    } catch (error) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist',
        }
    }
}

export default Meta
