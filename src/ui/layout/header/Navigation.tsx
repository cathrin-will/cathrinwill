'use client'
import { navOpenAtom } from '@/store/atoms'
import { useStore, useAtomValue } from 'jotai'
import MenuContent from './MenuContent'

export default function Menu({
    headerMenu,
    className,
}: {
    headerMenu: Sanity.Navigation
    className?: string
}) {
    const store = useStore()
    const navOpen = useAtomValue(navOpenAtom, { store })

    return (
        <MenuContent
            className={className}
            headerMenu={headerMenu}
            navOpen={navOpen}
        />
    )
}
