import { createClient } from 'next-sanity'
import isDev from '@/lib/env'

export default createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: !isDev,
    token: process.env.SANITY_API_TOKEN,
    stega: {
        enabled: false,
        studioUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/admin`,
    },
})
