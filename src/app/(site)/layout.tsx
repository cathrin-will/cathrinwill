import { isDev } from '@/lib/env'
// sanity
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'

// store
import StoreProvider from '@/store/storeProvider'

// ui
import Header from '@/ui/layout/header'
import Footer from '@/ui/layout/footer'
import BatteryNotification from '@/ui/components/batteryNotification'

//  analytics
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager } from '@next/third-parties/google'
import { WebVitals } from '@/lib/webVitals/webVitals'

// styles
import { Montserrat } from 'next/font/google'
import '@/ui/styles/globals.css'
import styles from '@/ui/styles/layout.module.scss'

const font = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata = {
    title: 'Ann-Cathrin Will | Front-end Developer ',
    description: 'Ann-Cathrin Will Front-end Developer Portfolio site',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang='en'
            className={font.className}>
            <GoogleTagManager gtmId='G-ZCEH6QHWSV' />
            <body
                className={styles.body}
                suppressHydrationWarning={true}>
                {isDev && <WebVitals />}
                {draftMode().isEnabled && (
                    <div>
                        <a
                            className='p-4 bg-black block'
                            href='/api/disable-draft'>
                            Disable preview mode
                        </a>
                    </div>
                )}
                <StoreProvider>
                    <Header />
                    <main
                        id='main'
                        className={styles.main}>
                        <BatteryNotification />
                        <>{children}</>
                    </main>
                    {draftMode().isEnabled && <VisualEditing />}
                    <Footer />
                </StoreProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
