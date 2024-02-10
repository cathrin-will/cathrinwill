import Page from '@/components/layout/page'
import Meta from '@/components/layout/meta'

export const generateMetadata = Meta

export default function LandingPage({ params }) {
    return <Page params={params} />
}
