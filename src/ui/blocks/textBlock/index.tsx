import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import styles from './textBlock.module.scss'

export default function TextBlock({
    content,
    themed,
    wrapIt = true,
}: Sanity.textBlock) {
    return (
        <Wrap
            wrapIt={wrapIt}
            containerSize='trim'>
            <Text
                content={content}
                className={themed ? styles.themed : ''}
            />
        </Wrap>
    )
}
