import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import Message from '@/ui/components/message'
export default function TextBlock({
    content,
    wrapIt = true,
}: Sanity.textBlock) {
    return (
        <Wrap wrapIt={wrapIt}>
            <Text content={content} />
        </Wrap>
    )
}
