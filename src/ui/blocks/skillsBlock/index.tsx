import Wrap from '@/ui/layout/wrap'
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

import styles from './skills.module.scss'
export default function TextBlock({ content, wrapIt = true }) {
    const test = 'rgb(252, 195, 153)'
    return (
        <Wrap wrapIt={wrapIt}>
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
            <Text content={content} />
        </Wrap>
    )
}
