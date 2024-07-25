import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'

export default function TextBlock({ content, wrapIt = true }) {
    return (
        <Wrap wrapIt={wrapIt}>
            <Text content={content} />
        </Wrap>
    )
}
