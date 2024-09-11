'use client'
import Wrap from '@/ui/layout/wrap'
import Section from '@/ui/layout/section'
import Text from '@/ui/components/text'
import { cn } from '@/lib/utils'
import { SiSanity } from 'react-icons/si'
import { MdCss } from 'react-icons/md'
import { MdHtml } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbAccessibleFilled } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaSquareJs } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { particlesConfig } from '@/ui/particles/stars'
import styles from './skills.module.scss'
export default function SkillsBlock({ content }: Sanity.skillsBlock) {
    const [particlesInit, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = async (container?: Container): Promise<void> => {}

    const options: ISourceOptions = useMemo(
        () => ({
            ...particlesConfig,
            interactivity: {
                ...particlesConfig.interactivity,
                detectsOn: 'window',
            },
        }),
        [],
    )

    return (
        <div className='relative flex items-center medium:min-h-64'>
            <Particles
                className={styles.particles}
                id='tsparticles'
                particlesLoaded={particlesLoaded}
                options={options}
            />
            <Section>
                <div className={styles.skills}>
                    <ul className={styles['skills__inner']}>
                        <li className={cn(styles.card, styles['card--1'])}>
                            <FaSquareJs className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--2'])}>
                            <SiTypescript className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--3'])}>
                            <FaReact className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--4'])}>
                            <TbBrandNextjs className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--5'])}>
                            <MdHtml className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--6'])}>
                            <MdCss className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--7'])}>
                            <RiTailwindCssFill className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--8'])}>
                            <SiSanity className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--9'])}>
                            <FaGithub className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--10'])}>
                            <TbAccessibleFilled className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--1'])}>
                            <FaSquareJs className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--2'])}>
                            <SiTypescript className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--3'])}>
                            <FaReact className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--4'])}>
                            <TbBrandNextjs className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--5'])}>
                            <MdHtml className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--6'])}>
                            <MdCss className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--7'])}>
                            <RiTailwindCssFill className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--8'])}>
                            <SiSanity className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--9'])}>
                            <FaGithub className={styles.icon} />
                        </li>
                        <li className={cn(styles.card, styles['card--10'])}>
                            <TbAccessibleFilled className={styles.icon} />
                        </li>
                    </ul>
                </div>
            </Section>
        </div>
    )
}
