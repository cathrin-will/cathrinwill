import Page from '@/ui/layout/page'
import Meta from '@/ui/layout/meta'

export const generateMetadata = Meta

export default function LandingPage({ params }) {
    return <Page params={params} />
}
