import './globals.css'
import styles from './layout.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
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
            <body className={styles.body}>
                {/*  add skip link */}
                <Header />

                <main id='main' className={styles.main}>
                    <>{children}</>
                </main>
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
