'use client'
import { Twirl as Hamburger } from 'hamburger-react'
import { useStore, useAtom } from 'jotai'
import { navOpenAtom } from '@/store/atoms'

import styles from './header.module.scss'
export default function Toggle() {
    const [navOpen, setNavOpen] = useAtom(navOpenAtom, {
        store: useStore(),
    })

    return (
        <div className={styles.toggle}>
            <Hamburger
                color='#000'
                size={48}
                toggled={navOpen}
                onToggle={(toggled) => {
                    if (toggled) {
                        setNavOpen(true)
                    } else {
                        setNavOpen(false)
                    }
                }}
            />
        </div>
    )
}
