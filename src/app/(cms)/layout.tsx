import { ReactNode } from 'react'
export const metadata = {
    title: 'Sanity',
    description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}