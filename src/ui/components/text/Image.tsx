import Img from '@/ui/components/img'

export default function Image({
    value,
}: {
    value: Sanity.Image & {
        caption?: string
    }
}) {
    return (
        <figure className='my-8 text-center'>
            <Img
                className='mx-auto'
                image={value}
            />

            {value.caption && (
                <figcaption className='italic'>{value.caption}</figcaption>
            )}
        </figure>
    )
}
