import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import { cn } from '@/lib/utils'

import styles from './accordion.module.scss'
export default function AccordionBlock({ content, items, wrapIt = true }) {
    return (
        <Wrap wrapIt={wrapIt}>
            <div>
                <Text content={content} />
            </div>

            {items?.map(({ summary, details }, key) => (
                <details
                    className={cn(styles.accordion)}
                    key={key}>
                    <summary>{summary}</summary>
                    <div>
                        <Text content={details} />
                    </div>
                </details>
            ))}
        </Wrap>
    )
}
