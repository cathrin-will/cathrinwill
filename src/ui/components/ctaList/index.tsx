import { cn } from '@/lib/utils'
import Button from '../button'

export default function CTAList({
    ctas,
    className,
}: React.HTMLAttributes<HTMLParagraphElement> & {
    ctas?: Sanity.Button[]
}) {
    return (
        <nav className={cn(className, 'flex gap-4 items-center ')}>
            {ctas?.map((cta, key) => (
                <Button
                    {...cta}
                    key={key}
                />
            ))}
        </nav>
    )
}
