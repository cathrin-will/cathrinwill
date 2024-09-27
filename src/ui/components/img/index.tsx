'use client'

import {
    useNextSanityImage,
    type UseNextSanityImageOptions,
} from 'next-sanity-image'
import client from '@/lib/sanity/client'
import Image, { type ImageProps } from 'next/image'
import { stegaClean } from '@sanity/client/stega'

interface ImgProps extends Omit<ImageProps, 'src' | 'alt'> {
    image: Sanity.Image
    alt?: string
    options?: UseNextSanityImageOptions
}

export default function Img({
    image,
    alt = '',
    options,
    ...props
}: ImgProps): JSX.Element | null {
    const imageProps = useNextSanityImage(client, image, options)
    if (!image || !image.asset) return null

    return (
        <Image
            {...imageProps}
            alt={image.alt || alt}
            loading={image.loading ? stegaClean(image.loading) : 'lazy'}
            {...props}
        />
    )
}
