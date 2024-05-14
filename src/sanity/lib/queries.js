import { groq } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/fetch'

export const PAGES_QUERY = groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      showInTopNav,
      "slug": slug.current
    }`

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    ogTitle,
    description,
    "slug": slug.current,
    components[]{
        ...,
        _type == "hero" => {
            "image": image.asset->url,
        },
        _type == "imageComponent" => {
            "image": image.asset->url,
        },
        _type == "textMedia" => {
            "image": image.asset->url,
        },
    }
}`
export async function getPages() {
    const pages = await sanityFetch({
        query: PAGES_QUERY,
        perspective: 'published',
        stega: false,
    })

    return pages
}

export async function getPage(slug) {
    const page = await sanityFetch({
        query: PAGE_QUERY,
        params: { slug },
        perspective: 'published',
        stega: false,
    })

    return page
}
