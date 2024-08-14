import Image from 'next/image'

export default function ImgSrc({
    src,
    alt,
    width,
    height,
}: {
    src: string
    alt: string
    width: number
    height: number
}) {
    if (!src) return null

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            loading='lazy'
        />
    )
}
