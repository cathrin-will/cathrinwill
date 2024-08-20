import AccordionBlock from './accordionBlock'
import CreativeBlock from './creativeBlock'
import CustomHTML from './customHTMLBlock'
import FormBlock from './formBlock'
import ImageBlock from './imageBlock'
import SliderBlock from './sliderBlock'
import SkillsBlock from './skillsBlock'
import StatsBlock from './statsBlock'
import TextBlock from './textBlock'

export default function Blocks({ blocks }: { blocks?: Sanity.Block[] }) {
    return (
        <>
            {blocks?.map((block) => {
                // prettier-ignore
                switch (block._type) {
                    case 'accordionBlock':
                        return <AccordionBlock {...block} key={block._key} />
                    case 'creativeBlock':
                        return <CreativeBlock {...block} key={block._key} />
                    case 'formBlock':
                        return <FormBlock {...block} key={block._key} />
                    case 'htmlBlock':
                        return <CustomHTML {...block} key={block._key} />
                    case 'imageBlock':
                        return <ImageBlock {...block} key={block._key} />
                    case 'skillsBlock':
                        return <SkillsBlock {...block} key={block._key} />
                    case 'statsBlock':
                        return <StatsBlock {...block} key={block._key} />
                    case 'sliderBlock':
                        return <SliderBlock {...block} key={block._key} />
                    case 'textBlock':
                        return <TextBlock {...block} key={block._key} />

                    default:
                        return <div data-type={block._type} key={block._key} />
                }
            })}
        </>
    )
}
