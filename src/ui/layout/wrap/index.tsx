import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'
const Wrap = ({ children, wrapIt = true }: Model.WrapIt) => {
    if (!wrapIt) return children
    return (
        <Section>
            <Container>{children}</Container>
        </Section>
    )
}

export default Wrap
