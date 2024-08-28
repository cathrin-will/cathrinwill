'use client'
import { Player } from '@lordicon/react'
import { useRef } from 'react'
import styles from './lordicon.module.scss'
import { useEffect, useState } from 'react'
export default function Lordicon({
    icon = 'email',
    link,
    text,
}: Model.Lordicon) {
    const playerRef = useRef<Player>(null)
    const [iconData, setIconData] = useState(null)

    useEffect(() => {
        const loadIcon = async () => {
            const data = await import(`../../icons/${icon}.json`)
            setIconData(data)
        }
        loadIcon()
    }, [icon])
    const play = () => {
        playerRef.current?.playFromBeginning()
    }

    return (
        <a
            href={link}
            className={styles.icon}
            onMouseOver={play}>
            <Player
                ref={playerRef}
                icon={iconData}
                size={22}
                colorize='#fff'
            />
            {text}
        </a>
    )
}
