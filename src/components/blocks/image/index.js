import styles from './image.module.scss'
import Image from 'next/image'

const imageComponent = ({ image, alt }) => {
    return (
        <Image
            src={image}
            alt={alt ?? 'placeholder'}
            className={styles.image}
            width={1000}
            height={250}
        />
    )
}

export default imageComponent
