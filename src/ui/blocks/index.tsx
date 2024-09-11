import AccordionBlock from './accordionBlock'
import CreativeBlock from './creativeBlock'
import CustomHTML from './customHTMLBlock'
import FormBlock from './formBlock'
import ImageBlock from './imageBlock'
import SliderBlock from './sliderBlock'
import SkillsBlock from './skillsBlock'
import StatsBlock from './statsBlock'
import TextBlock from './textBlock'
import CardsBlock from './cardsBlock'

export default function Blocks({
    blocks,
    wrapIt,
}: {
    blocks?: Sanity.Block[]
    wrapIt?: boolean
}) {
    return (
        <>
            {blocks?.map((block) => {
                // prettier-ignore
                switch (block._type) {
                    case 'accordionBlock':
                        return <AccordionBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'creativeBlock':
                        return <CreativeBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'formBlock':
                        return <FormBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'htmlBlock':
                        return <CustomHTML {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'imageBlock':
                        return <ImageBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'skillsBlock':
                        return <SkillsBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'statsBlock':
                        return <StatsBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'sliderBlock':
                        return <SliderBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'textBlock':
                        return <TextBlock {...block} key={block._key} wrapIt={wrapIt}/>
                    case 'cardsBlock':
                        return <CardsBlock {...block} key={block._key} wrapIt={wrapIt}/>

                    default:
                        return <div data-type={block._type} key={block._key} />
                }
            })}
        </>
    )
}
