import Img from '@/ui/components/img'
import { cn } from '@/lib/utils'
import styles from './text.module.scss'
export default function Image({
    value,
}: {
    value: Sanity.Image & {
        caption?: string
    }
}) {
    return (
        <figure className='my-8 text-center'>
            {value.style === 'profile' && (
                <div className={cn(styles.profile)}>
                    <Img
                        className={cn(styles.image)}
                        image={value}
                    />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={cn(styles.video)}
                        src='/videos/flip.mp4'
                    />
                </div>
            )}
            {value.style !== 'profile' && (
                <Img
                    className={cn(styles.image)}
                    image={value}
                />
            )}
        </figure>
    )
}
