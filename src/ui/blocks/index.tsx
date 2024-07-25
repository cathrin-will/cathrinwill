import CreativeBlock from './creativeBlock'
import CustomHTML from './customHTMLBlock'
import ImageBlock from './imageBlock'
import TextBlock from './textBlock'
import AccordionBlock from './accordionBlock'
import SliderBlock from './sliderBlock'
import FormBlock from './formBlock'

export default function Modules({ blocks }: { blocks?: Sanity.Block[] }) {
    return (
        <>
            {blocks?.map((block) => {
                switch (block._type) {
                    case 'creativeBlock':
                        return <CreativeBlock {...block} key={block._key} />
                    case 'htmlBlock':
                        return <CustomHTML {...block} key={block._key} />
                    case 'imageBlock':
                        return <ImageBlock {...block} key={block._key} />
                    case 'textBlock':
                        return <TextBlock {...block} key={block._key} />
                    case 'accordionBlock':
                        return <AccordionBlock {...block} key={block._key} />
                    case 'sliderBlock':
                        return <SliderBlock {...block} key={block._key} />
                    case 'formBlock':
                        return <FormBlock {...block} key={block._key} />

                    default:
                        return <div data-type={block._type} key={block._key} />
                }
            })}
        </>
    )
}
