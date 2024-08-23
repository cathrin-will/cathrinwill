import { cn } from '@/lib/utils'
import { stegaClean } from '@sanity/client/stega'
import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'
import Text from '@/ui/components/text'
import Blocks from '@/ui/blocks'
export default function CreativeBlock({
    content,
    columns,
    columnsNumber,
    alignItems,
}: Sanity.creativeBlock) {
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
                            <div key={i}>
                                <Blocks blocks={subModules} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
