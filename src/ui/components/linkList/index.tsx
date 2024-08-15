'use client'
import { useRef, useState } from 'react'
import useOutsideClick from '@/lib/utils/useOutsideClick'

import Button from '@/ui/components/button'
import Text from '@/ui/components/text'
import { cn } from '@/lib/utils'

import styles from './link-list.module.scss'
export default function LinkList({
    label,
    style,
    blurb,
    links,
}: Sanity.LinkList) {
    const [isOpen, setIsOpen] = useState(false)
    const detailsRef = useRef(null)
    const summaryClasses = cn(styles.summary, styles[style ?? styles.style])

    useOutsideClick(detailsRef, () => {
        if (isOpen) {
            setIsOpen(false)
        }
    })

    return (
        <details
            className={styles.details}
            ref={detailsRef}
            open={isOpen}>
            <summary
                className={summaryClasses}
                onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(!isOpen)
                }}>
                {label}
            </summary>

            <div className={styles.drop}>
                <Text className={styles.blurb}>{blurb}</Text>
                <ul className={styles.list}>
                    {links?.map((link, key) => (
                        <li key={key}>
                            <Button
                                className='link'
                                link={link}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </details>
    )
}
