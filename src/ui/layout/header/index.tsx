import { getSite } from '@/lib/sanity/queries'
import { cn } from '@/lib/utils'

// ui
import DayNight from '@/ui/components/dayNight'
import SkipToContent from '@/ui/components/skipToContent'
import Navigation from './Navigation'

// styles
import styles from './header.module.scss'

export default async function Header() {
    const { headerMenu, ctaMenu } = await getSite()

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
                    {headerMenu && (
                        <Navigation
                            headerMenu={headerMenu}
                            className={styles['nav--main']}
                        />
                    )}

                    <DayNight />
                </div>
            </header>
        </>
    )
}
