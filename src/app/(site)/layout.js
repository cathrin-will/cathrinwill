import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata = {
    title: 'Ann-Cathrin Will | Front-end Developer ',
    description: 'Ann-Cathrin Will Front-end Developer Portfolio site',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/*  add skip link */}
                <Header />
                <main id='main'>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
