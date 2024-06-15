import { PortableText } from '@portabletext/react'
import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'
const Accordion = ({
    summary = 'Accordion Summary',
    detail = '',
    children,
}) => {
    return (
        <Section>
            <Container>
                <details className='accordion'>
                    <summary className='accordion__summary'>{summary}</summary>
                    <div className='accordion__copy'>
                        {detail && <PortableText value={detail} />}
                        {children}
                    </div>
                </details>
            </Container>
        </Section>
    )
}

export default Accordion
