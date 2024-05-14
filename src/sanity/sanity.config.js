/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.jsx` route
 Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
 // Vision is a tool that lets you query your content with GROQ in the studio
 // https://www.sanity.io/docs/the-vision-plugin
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { defineDocuments, presentationTool } from 'sanity/presentation'
import { media } from 'sanity-plugin-media'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import schemas from '@/sanity/schemas'

const isDev = process.env.NEXT_PUBLIC_SANITY_DATASET !== 'production'
const devPlugins = isDev ? [visionTool({ defaultApiVersion: apiVersion })] : []
export default defineConfig({
    basePath: '/admin',
    projectId,
    dataset,
    schema: { types: schemas }, // Add and edit the content schema in the './sanity/schema' folder
    plugins: [
        ...devPlugins,
        structureTool(),
        vercelDeployTool(),
        media(),
        // presentationTool({
        //     previewUrl: {
        //         draftMode: {
        //             enable: '/api/draft',
        //         },
        //     },
        //     resolve: {
        //         mainDocuments: defineDocuments([
        //             {
        //                 route: '/:slug',
        //                 filter: `_type == "page" && slug.current == $slug`,
        //             },
        //         ]),
        //     },
        // }),
    ],
    experimental: {
        taint: true,
    },
})
