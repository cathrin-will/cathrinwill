import { getPageByID, getPage } from '@/sanity/sanity-utils'

const Meta = async ({ params }) => {
    try {
        const page = params?.slug
            ? await getPage(params.slug)
            : await getPageByID('homepage')
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

export default Meta
