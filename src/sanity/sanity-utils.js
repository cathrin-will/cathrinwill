const { createClient, groq } = require('next-sanity')
import { client } from '@/sanity/lib/client'

export async function getPages() {
    return client.fetch(
        groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      showInTopNav,
      "slug": slug.current
    }`,
    )
}

export async function getPage(slug) {
    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
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
        }`,
        { slug },
    )
}

export async function getPageByID(id) {
    return client.fetch(
        groq`*[_type == "page" && _id == $id][0]{
            _id,
            _createdAt,
            title,
            ogTitle,
            description,
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
        }`,
        { id },
    )
}
