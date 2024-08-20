'use client'
import { Player } from '@lordicon/react'
import { useRef } from 'react'
import styles from './lordicon.module.scss'
import email from '@/ui/icons/email.json'
export default function EmailIcon() {
    const playerRef = useRef<Player>(null)

    const play = () => {
        playerRef.current?.playFromBeginning()
    }

    return (
        <a
            href='mailto:ac.will.dev@gmail.com'
            className={styles.email}
            onMouseOver={play}>
            <Player
                ref={playerRef}
                icon={email}
                size={22}
                colorize='#fff'
            />
            ac.will.dev@gmail.com
        </a>
    )
}
