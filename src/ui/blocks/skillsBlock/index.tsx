import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'

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
    return (
        <Wrap wrapIt={wrapIt}>
            <div className={styles.skills}>
                <ul className={styles['skills__inner']}>
                    <li className={styles.card}>
                        <FaSquareJs className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <SiTypescript className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <FaReact className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <TbBrandNextjs className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <MdHtml className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <MdCss className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <RiTailwindCssFill className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <SiSanity className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <FaGithub className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <TbAccessibleFilled className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <FaSquareJs className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <SiTypescript className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <FaReact className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <TbBrandNextjs className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <MdCss className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <RiTailwindCssFill className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <SiSanity className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <FaGithub className={styles.icon} />
                    </li>
                    <li className={styles.card}>
                        <TbAccessibleFilled className={styles.icon} />
                    </li>
                </ul>
            </div>
            <Text content={content} />
        </Wrap>
    )
}
