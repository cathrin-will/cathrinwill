import Img from '@/ui/components/img'
import Wrap from '@/ui/layout/wrap'
import styles from './image.module.scss'
export default function ImageBlock({
    image,
    wrapIt = true,
}: Sanity.ImageBlock) {
    return (
        <Wrap wrapIt={wrapIt}>
            <figure>
                <Img
                    className={styles.image}
                    image={image}
                />
            </figure>
        </Wrap>
    )
}
