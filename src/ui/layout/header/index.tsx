import { getSite } from '@/lib/sanity/queries'
import { cn } from '@/lib/utils'
import Link from 'next/link'
// ui
import DayNight from '@/ui/components/dayNight'
import SkipToContent from '@/ui/components/skipToContent'
import LanguageChanger from '@/ui/components/languageChanger'
import Navigation from './Navigation'

// styles
import styles from './header.module.scss'

export default async function Header() {
    const { headerMenu, ctaMenu } = (await getSite()) as Sanity.Site

    return (
        <>
            <SkipToContent />

            <header className={cn(styles.header)}>
                <div className={styles.container}>
                    {ctaMenu && (
                        <Navigation
                            headerMenu={ctaMenu}
                            className={styles['nav--cta']}
                        />
                    )}
                    <div className='flex flex-row gap-5'>
                        {headerMenu?.items && (
                            <Navigation
                                headerMenu={headerMenu}
                                className={styles['nav--main']}
                            />
                        )}
                        <LanguageChanger />
                    </div>

                    <DayNight />
                </div>
            </header>
        </>
    )
}
