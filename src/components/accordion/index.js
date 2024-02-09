import { PortableText } from '@portabletext/react'
const Accordion = ({
    summary = 'Accordion Summary',
    detail = '',
    children,
}) => {
    return (
        <details className='accordion'>
            <summary className='accordion__summary'>{summary}</summary>
            <div className='accordion__copy'>
                {detail && <PortableText value={detail} />}
                {children}
            </div>
        </details>
    )
}

export default Accordion
