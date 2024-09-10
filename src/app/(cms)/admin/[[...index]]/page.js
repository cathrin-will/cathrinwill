'use client'
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity/sanity.config'

export default function AdminPage() {
    return (
        <>
            <NextStudio config={config} />

            <span
                className={`${config.dataset === 'staging' ? 'bg-lime-200' : 'bg-purple-400'} text-sm  rounded-sm right-40 px-3 py-1 absolute z-50 bottom-3 capitalize`}>
                {config.dataset}
            </span>
        </>
    )
}
