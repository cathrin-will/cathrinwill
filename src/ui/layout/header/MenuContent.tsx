'use client'
import Button from '@/ui/components/button'
import LinkList from '@/ui/components/linkList'
import { cn } from '@/lib/utils'
import { navOpenAtom } from '@/store/atoms'
import { usePathname } from 'next/navigation'
import { useStore, useAtom } from 'jotai'

import styles from './header.module.scss'

export default function MenuContent({
    headerMenu,
    className,
}: {
    headerMenu: Sanity.Navigation
    className?: string | undefined
}) {
    const store = useStore()
    const pathname = usePathname()
    const [navOpen, setNavOpen] = useAtom(navOpenAtom, { store })
    return (
        <nav
            className={cn(
                className,
                navOpen ? styles['nav--open'] : '',
                styles.nav,
            )}>
            {headerMenu?.items?.map(
                (item: Sanity.Link | Sanity.LinkList, key: number) => {
                    switch (item._type) {
                        case 'link':
                            const currentSlug = `/${item?.internal?.metadata?.slug?.current}`
                            const active = pathname === currentSlug

                            return (
                                <Button
                                    style='plain'
                                    className={cn(
                                        styles.link,
                                        active && styles.active,
                                    )}
                                    link={item}
                                    key={key}
                                    onClick={() => {
                                        setNavOpen(false)
                                    }}
                                />
                            )
                        case 'link.list':
                            return (
                                <LinkList
                                    {...item}
                                    key={key}
                                />
                            )
                        default:
                            return null
                    }
                },
            )}
        </nav>
    )
}
