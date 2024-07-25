import Img from '@/ui/components/img'
import Wrap from '@/ui/layout/wrap'
import styles from './image.module.scss'
export default function ImageBlock({ image, wrapIt = true }) {
    return (
        <Wrap wrapIt={wrapIt}>
            <figure>
                <Img
                    className={styles.image}
                    image={image}
                    imageWidth={1312}
                />
            </figure>
        </Wrap>
    )
}
