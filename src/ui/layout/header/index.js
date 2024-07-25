import { getSite } from '@/lib/sanity/queries'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// ui
import CTAList from '@/ui/components/ctaList'
import Container from '@/ui/layout/container'
import DayNight from '@/ui/components/dayNight'
import SkipToContent from '@/ui/components/skipToContent'
import Navigation from './Navigation'

// styles
import styles from './header.module.scss'

export default async function Header() {
    const { title, ctas } = await getSite()

    return (
        <>
            <SkipToContent />

            <header className={cn(styles.header)}>
                <Container className={styles.container}>
                    {/* <div>
                        <Link href='/'>
                            <Image
                                src='/images/logo.svg'
                                alt={`${title} Logo`}
                                width={175}
                                height={28}
                                className={styles.logo}
                            />
                        </Link>
                    </div> */}

                    <Navigation />

                    <CTAList
                        ctas={ctas}
                        className={cn(styles.ctas, 'justify-center')}
                    />
                </Container>
                <DayNight />
            </header>
        </>
    )
}
