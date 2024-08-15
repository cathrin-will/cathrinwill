import { getSite } from '@/lib/sanity/queries'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// ui
import Container from '@/ui/layout/container'
import DayNight from '@/ui/components/dayNight'
import SkipToContent from '@/ui/components/skipToContent'
import Navigation from './Navigation'
import Toggle from './Toggle'

// styles
import styles from './header.module.scss'

export default async function Header() {
    const { headerMenu, ctaMenu } = await getSite()

    return (
        <>
            <SkipToContent />

            <header className={cn(styles.header)}>
                <Container className={styles.container}>
                    {ctaMenu && (
                        <Navigation
                            headerMenu={ctaMenu}
                            className={styles['nav--cta']}
                        />
                    )}
                    {headerMenu && (
                        <Navigation
                            headerMenu={headerMenu}
                            className={styles['nav--main']}
                        />
                    )}

                    {/* <Toggle /> */}
                    <DayNight />
                </Container>
            </header>
        </>
    )
}
