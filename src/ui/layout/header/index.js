import { getPages } from '@/sanity/queries'
import Link from 'next/link'
import Toggle from '@/ui/components/toggle'
import styles from './header.module.scss'
const Header = async () => {
    const pages = await getPages()

    return (
        <header className={styles.header}>
            <div className='flex gap-4 '>
                {pages.length > 1 && (
                    <>
                        <Link href='/' className='hover:underline'>
                            Home
                        </Link>
                        {pages.map(
                            (page) =>
                                page.showInTopNav && (
                                    <Link
                                        key={page._id}
                                        href={`/${page.slug}`}
                                        className='hover:underline'
                                    >
                                        {page.title}
                                    </Link>
                                ),
                        )}
                    </>
                )}
            </div>
            <Toggle />
        </header>
    )
}

export default Header
