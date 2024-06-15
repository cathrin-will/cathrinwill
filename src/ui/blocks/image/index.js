import styles from './image.module.scss'
import Image from 'next/image'
import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'

const imageComponent = ({ image, alt }) => {
    return (
        <Section>
            <Container>
                <Image
                    src={image}
                    alt={alt ?? 'placeholder'}
                    className={styles.image}
                    width={1000}
                    height={250}
                />
            </Container>
        </Section>
    )
}

export default imageComponent
