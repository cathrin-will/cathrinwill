export default function CustomHtmlBlock({
    html,
}: Partial<{
    html: string
}>) {
    if (!html) return null
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
