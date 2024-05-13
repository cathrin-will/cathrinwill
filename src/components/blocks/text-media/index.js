import styles from './text-media.module.scss'
import richTextStyles from './../rich-text/rich-text.module.scss'
import Image from 'next/image'
import Section from '@/components/layout/section'
import Container from '@/components/layout/container'
import { PortableText } from '@portabletext/react'

const textMedia = ({ image, alt, content, heading }) => {
    return (
        <Section>
            <Container>
                <div
                    className={`${richTextStyles['rich-text']} ${styles['rich-text']}`}
                >
                    <h1>{heading}</h1>
                    <Image
                        src={image}
                        alt={alt ?? 'placeholder'}
                        className={styles.image}
                        width={1000}
                        height={250}
                    />
                    {content && <PortableText value={content} />}
                </div>
            </Container>
        </Section>
    )
}

export default textMedia
