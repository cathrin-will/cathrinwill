import { PortableText } from '@portabletext/react'
import styles from './rich-text.module.scss'

const richText = ({ headline, image, alt, content }) => {
    return (
        <div className={styles['rich-text']}>
            {content && <PortableText value={content} />}
        </div>
    )
}

export default richText
