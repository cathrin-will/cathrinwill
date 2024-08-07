'use client'
import { cn } from '@/lib/utils'
import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import React from 'react'
import Slider from 'react-slick'
import Img from '@/ui/components/img'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './slider.module.scss'

export default function SliderBlock({ content, images, wrapIt = true }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Wrap wrapIt={wrapIt}>
            <div>
                <Text content={content} />
            </div>

            <Slider
                {...settings}
                className={cn(styles.slider)}>
                {images?.map(({ image }, key) => (
                    <div
                        className={cn(styles.slide)}
                        key={key}>
                        <Img image={image} />
                    </div>
                ))}
            </Slider>
        </Wrap>
    )
}
