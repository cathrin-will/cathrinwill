import { fetchSanity, groq } from './fetch'

const navigationQuery = groq`
    title,
    items[]{
        ...,
        internal->{ _type, title, metadata },
        links[]{
            ...,
            internal->{ _type, title, metadata }
        }
    }
`

export const blockQuery = groq`
blocks[] {
    ...,
    _type == 'formBlock' => {
    ...,
    formReference->{
        ...
    }
    },
    _type == 'textBlock' => {
    ...,
    content[]{
        ...,
        markDefs[]{
        ...,
        _type == 'internalLink' => {
            ...,
            reference->{
            metadata
            }
        }
        }
    }
    }
}

`
export const metaQuery = groq`
    metadata {
        ...,
        'ogimage': image.asset->url
    }
`
export async function getSite() {
    return await fetchSanity(
        groq`
            *[_type == 'siteDetail'][0]{
                ...,
                ctas[]{
                    ...,
                    link{
                        ...,
                        internal->{ _type, title, metadata }
                    }
                },
                footerMenu->{ ${navigationQuery} },
                headerMenu->{ ${navigationQuery} },
                'ogimage': ogimage.asset->url
            }
        `,
        { tags: ['site'] },
    )
}
