'use client'
import Button from '@/ui/components/button'
import LinkList from '@/ui/components/linkList'
import { cn } from '@/lib/utils'
import { getSite } from '@/lib/sanity/queries'
import { navOpenAtom } from '@/store/atoms'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useStore, useAtomValue, useAtom } from 'jotai'

import styles from './header.module.scss'

function MenuContent({ headerMenu, navOpen }) {
    const pathname = usePathname()
    const [, setNavOpen] = useAtom(navOpenAtom, {
        store: useStore(),
    })
    return (
        <nav className={cn(navOpen ? styles['nav--open'] : '', styles.nav)}>
            {headerMenu?.items?.map((item, key) => {
                switch (item._type) {
                    case 'link':
                        const currentSlug = `/${item?.internal?.metadata?.slug?.current}`
                        const active = pathname === currentSlug

                        return (
                            <Button
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
            })}
        </nav>
    )
}

export default function Menu() {
    const [headerMenu, setHeaderMenu] = useState(null)
    const [loading, setLoading] = useState(true)
    const store = useStore()
    const navOpen = useAtomValue(navOpenAtom, { store })

    useEffect(() => {
        async function fetchData() {
            const data = await getSite()

            setHeaderMenu(data.headerMenu)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) {
        return <div className={styles.nav}></div>
    }

    return (
        <MenuContent
            headerMenu={headerMenu}
            navOpen={navOpen}
        />
    )
}
