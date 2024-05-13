import { getPages } from '@/sanity/sanity-utils'
import Link from 'next/link'
import styles from './header.module.scss'
const Header = async () => {
    const pages = await getPages()

    return (
        <header className={styles.header}>
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
        </header>
    )
}

export default Header
