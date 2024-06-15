import './globals.css'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import styles from './layout.module.scss'
import Header from '@/ui/layout/header'
import Footer from '@/ui/layout/footer'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
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
                    <div>
                        <a
                            className='p-4 bg-black block'
                            href='/api/disable-draft'
                        >
                            Disable preview mode
                        </a>
                    </div>
                )}

                <Header />

                <main id='main' className={styles.main}>
                    <>{children}</>
                    {/* <img src='images/love-city.svg' alt=' cityscape ' /> */}
                </main>
                {draftMode().isEnabled && <VisualEditing />}
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
