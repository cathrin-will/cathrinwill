import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'
const Wrap = ({ children, wrapIt = true, containerSize }: Model.WrapIt) => {
    if (!wrapIt) return children
    return (
        <Section>
            <Container containerSize={containerSize}>{children}</Container>
        </Section>
    )
}

export default Wrap
