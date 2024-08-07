import { cn } from '@/lib/utils'
import { stegaClean } from '@sanity/client/stega'
import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'
import Text from '@/ui/components/text'
import TextBlock from '@/ui/blocks/textBlock'
export default function CreativeBlock({
    content,
    columns,
    columnsNumber,
    alignItems,
}) {
    alignItems = stegaClean(alignItems)
    const gridPercentage = () => {
        let gridClass = ''
        columns?.forEach(({ percentageWidth }, i) => {
            if (i !== 0) {
                gridClass += ' '
            }
            if (percentageWidth) {
                gridClass += `${percentageWidth}%`
            } else {
                gridClass += '1fr'
            }
        })
        if (columnsNumber) {
            gridClass = `repeat(${columnsNumber}, 1fr)`
        }

        return gridClass
    }
    return (
        <Section>
            <Container>
                <div className='flex flex-col gap-4'>
                    {content && <Text content={content} />}

                    <div
                        className={cn(
                            'flex flex-col max-medium:!items-stretch medium:grid gap-4 medium:gap-8',
                        )}
                        style={{
                            gridTemplateColumns: gridPercentage(),
                            alignItems,
                        }}>
                        {columns?.map(({ subModules }, i) => (
                            <div
                                key={i}
                                className='border-dotted border-2'>
                                {subModules?.map((subModule, ii) => {
                                    subModule.wrapIt = false

                                    switch (subModule._type) {
                                        case 'textBlock':
                                            return (
                                                <TextBlock
                                                    {...subModule}
                                                    key={ii}
                                                />
                                            )
                                    }
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
