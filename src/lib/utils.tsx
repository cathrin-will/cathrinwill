import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { stegaClean } from '@sanity/client/stega'
import textStyles from '@/ui/components/text/text.module.scss'
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function nl2br(str?: string) {
    if (!str) return ''
    return str.split('\n').join('<br>')
}

export function slug(str: string) {
    return str
        .toLowerCase()
        .replace(/[\s\W]+/g, '-')
        .replace(/-$/, '')
}

export const wrapHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text
    highlight = stegaClean(highlight)
    text = stegaClean(text)
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))

    return parts.map((part, index) =>
        part === highlight ? (
            <span
                key={index}
                className={textStyles['highlighted']}>
                {part}
            </span>
        ) : (
            part
        ),
    )
}
