const template = (componentName) => `import SEO from '@components/seo'
import Page from '@layouts/page'

export default function ${componentName}() {
    return (
        <>
            <Page>${componentName} Page</Page>
        </>
    )
}`
export default template
