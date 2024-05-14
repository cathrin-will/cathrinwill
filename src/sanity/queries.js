import { groq } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/fetch'

export async function getPages() {
    const query = groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      showInTopNav,
      "slug": slug.current
    }`

    const pages = await sanityFetch({
        query: query,
        perspective: 'published',
        stega: false,
    })

    return pages
}

export async function getPage(slug) {
    const query = groq`*[_type == "page" && slug.current == $slug][0]{
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

    const page = await sanityFetch({
        query: query,
        params: { slug },
        perspective: 'published',
        stega: false,
    })

    return page
}
