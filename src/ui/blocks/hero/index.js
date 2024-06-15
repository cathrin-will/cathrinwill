import { PortableText } from '@portabletext/react'
import Image from 'next/image'
const Hero = ({ headline, image, alt, description }) => {
    return (
        <div>
            {headline && (
                <h2 className='text-4xl font-extrabold mb-4'> {headline}</h2>
            )}

            {image && (
                <Image
                    src={image}
                    alt={alt ?? 'placeholder'}
                    className='object-cover'
                    width={1000}
                    height={250}
                />
            )}
            {description && <PortableText value={description} />}
        </div>
    )
}

export default Hero
