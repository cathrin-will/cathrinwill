import { createClient } from 'next-sanity'
import { isDev, apiVersion, projectId, dataset } from '@/lib/env'

export default createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !isDev,
    token: process.env.SANITY_API_TOKEN,
    stega: {
        enabled: false,
        studioUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/admin`,
    },
})
