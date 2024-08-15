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
    const summaryClasses = cn(styles.summary, styles[style ?? styles.style])
    return (
        <details className={styles.details}>
            <summary className={summaryClasses}>{label}</summary>

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
