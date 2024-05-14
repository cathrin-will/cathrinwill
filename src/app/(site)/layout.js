import './globals.css'
import { draftMode } from 'next/headers'
import styles from './layout.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import LiveVisualEditing from '@/components/sanity/live-visual-editing'
const font = Montserrat({ subsets: ['latin'], display: 'swap' })
export const metadata = {
    title: 'Ann-Cathrin Will | Front-end Developer ',
    description: 'Ann-Cathrin Will Front-end Developer Portfolio site',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={font.className}>
            <body className={styles.body} suppressHydrationWarning={true}>
                {/*  add skip link */}
                {draftMode().isEnabled && (
                    <div className='p-4 bg-black block'>
                        <a
                            className='p-1 bg-blue-900 rounded'
                            href='/api/disable-draft'
                        >
                            Disable preview mode
                        </a>
                    </div>
                )}

                <Header />

                <main id='main' className={styles.main}>
                    <>{children}</>
                    {draftMode().isEnabled && <LiveVisualEditing />}
                </main>

                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
