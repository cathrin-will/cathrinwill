import { PortableText } from '@portabletext/react'
import styles from './rich-text.module.scss'
import Section from '@/components/layout/section'
import Container from '@/components/layout/container'
const richText = ({ headline, image, alt, content }) => {
    return (
        <Section>
            <Container>
                <div className={styles['rich-text']}>
                    {content && <PortableText value={content} />}
                </div>
            </Container>
        </Section>
    )
}

export default richText
