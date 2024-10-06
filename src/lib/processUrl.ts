export const SITE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL

// eslint-disable-next-line import/no-anonymous-default-export
export default function (
    page: Sanity.PageBase,
    {
        base = true,
        params,
    }: {
        base?: boolean
        params?: string
    } = {},
) {
    const directory = null
    const slug = page?.metadata?.slug?.current
    const path = slug === 'index' ? null : slug

    return (
        (base ? SITE_URL : '/') +
        [directory, path, params].filter(Boolean).join('/')
    )
}
