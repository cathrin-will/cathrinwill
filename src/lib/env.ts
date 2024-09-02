export const isDev =
    process.env.NODE_ENV === 'development' ||
    process.env.ENABLE_PREVIEW === 'true'

export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2022-03-10'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '4z3s67le'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'staging'
