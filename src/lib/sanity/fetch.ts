import client from '@/lib/sanity/client'
import { isDev } from '@/lib/env'
// import { draftMode } from 'next/headers'
import type { QueryParams, ResponseQueryOptions } from 'next-sanity'

export { default as groq } from 'groq'

export function fetchSanity<T = unknown>(
    query: string,
    {
        params = {},
        ...next
    }: {
        params?: QueryParams
    } & ResponseQueryOptions['next'] = {},
) {
    const preview = isDev
    // || draftMode().isEnabled

    return client.fetch<T>(
        query,
        params,
        preview
            ? {
                  stega: true,
                  perspective: 'previewDrafts',
                  token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
                  useCdn: false,
                  next: {
                      revalidate: 0,
                      ...next,
                  },
              }
            : {
                  perspective: 'published',
                  useCdn: true,
                  next: {
                      revalidate: false,
                      ...next,
                  },
              },
    )
}
