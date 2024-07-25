/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.jsx` route
 Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
 // Vision is a tool that lets you query your content with GROQ in the studio
 // https://www.sanity.io/docs/the-vision-plugin
 */

import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { structure } from '@/sanity/structure/'
import { defaultDocumentNode } from '@/sanity/structure/defaultDocumentNode'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schemaTypes } from '@/sanity/schemas'

const isDev = process.env.NEXT_PUBLIC_SANITY_DATASET !== 'production'
const devPlugins = isDev ? [visionTool({ defaultApiVersion: apiVersion })] : []

export default defineConfig({
    name: 'default',
    title: 'portfolio',
    basePath: '/admin',
    projectId,
    dataset,
    schema: { types: schemaTypes },
    plugins: [
        structureTool({ title: 'Content', structure, defaultDocumentNode }),
        presentationTool({
            title: 'Editor',
            previewUrl: {
                draftMode: {
                    enable: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/draft`,
                },
            },
        }),
        vercelDeployTool(),
        media(),
        visionTool(),

        ...devPlugins,
    ],
    experimental: {
        taint: true,
    },
})
