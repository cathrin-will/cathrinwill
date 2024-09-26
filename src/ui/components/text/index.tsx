import { PortableText } from '@portabletext/react'
import { cn } from '@/lib/utils'

import Button from '@/ui/components/button'
import Image from './img'

import styles from './text.module.scss'
export default function Text({
    content,
    children,
    className,
}: {
    content?: Sanity.SanityContent
    children?: React.ReactNode
    className?: string
}) {
    if (children)
        return <div className={cn(styles['text'], className)}>{children}</div>
    if (!content) return null
    return (
        <div className={cn(styles['text'], className)}>
            <div className='relative z-10'>
                <PortableText
                    value={content}
                    components={{
                        types: {
                            image: Image,
                        },

                        marks: {
                            highlight({ children }) {
                                return (
                                    <span className={styles.highlight}>
                                        {children}
                                    </span>
                                )
                            },
                            link: ({ children, value }) => {
                                value.label = children
                                return (
                                    <Button
                                        link={value}
                                        style={false}
                                    />
                                )
                            },
                        },

                        block: {
                            leftAlign: ({ children }) => {
                                return (
                                    <div className='text-left'>{children}</div>
                                )
                            },
                            rightAlign: ({ children }) => {
                                return (
                                    <div className='text-right'>{children}</div>
                                )
                            },
                            centerAlign: ({ children }) => {
                                return (
                                    <div className='text-center'>
                                        {children}
                                    </div>
                                )
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}
