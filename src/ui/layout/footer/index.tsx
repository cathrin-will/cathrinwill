import { cn } from '@/lib/utils'
import styles from './footer.module.scss'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'

import EmailIcon from '@/ui/components/lordicon/emailIcon'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <EmailIcon />
            <ul className={cn(styles.social)}>
                <li>
                    <a
                        href='https://github.com/cathrin-will'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='GitHub'>
                        <span className='sr-only'>
                            cathrin-will&lsquo;s Github
                        </span>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a
                        href='https://codepen.io/cathrinwill'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='codepen'>
                        <span className='sr-only'>
                            Ann-Cathrin Will&lsquo;s CodePen
                        </span>
                        <FaCodepen />
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.linkedin.com/in/cathrinwill/'
                        target='_blank'
                        rel='noopener noreferrer'
                        title='LinkedIn'>
                        <span className='sr-only'>
                            Ann-Cathrin Will&lsquo;s LinkedIn
                        </span>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <div className='flex justify-center text-center small:justify-end small:text-right'>
                <a
                    href='https://www.websitecarbon.com/website/acwill-dev/'
                    className={cn(styles.link, styles.carbon)}
                    target='_blank'
                    rel='noopener noreferrer'>
                    This page has an <span className='text-lg'>A+</span> carbon
                    rating
                    <span className={styles['🌱']}></span>
                </a>
            </div>
        </footer>
    )
}

export default Footer
