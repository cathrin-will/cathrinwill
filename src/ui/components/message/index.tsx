import { cn } from '@/lib/utils'
import styles from './message.module.scss'

export default function Message({
    type = 'error',
    content,
    className,
}: {
    type: 'error' | 'success'
    content: string
    className?: string
}) {
    const props = {
        className: cn(className, type ? styles[type] : ''),
    }

    return <p {...props}>{content}</p>
}
