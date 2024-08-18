import Link from 'next/link'
import { cn } from '@/lib/utils'
import processUrl from '@/lib/processUrl'
import styles from './button.module.scss'

export default function Button({
    link,
    style,
    className,
    children,
    onClick,
}: Sanity.Button & React.HTMLAttributes<HTMLAnchorElement>) {
    if (!link?.type) return null

    const props = {
        className: style ? cn(className, styles[style ?? link.style]) : null,
        children: children || link.label || link.internal?.title,
        onClick: onClick,
    }
    switch (link.type) {
        case 'internal':
            if (!link.internal) return null

            return (
                <Link
                    href={processUrl(link.internal, {
                        base: false,
                    })}
                    {...props}>
                    {link.label}
                </Link>
            )

        case 'external':
            return (
                <a
                    href={link.external}
                    {...props}
                    target='_blank'
                    rel='noreferrer noopenner'>
                    {link.label}
                </a>
            )

        default:
            return null
    }
}
