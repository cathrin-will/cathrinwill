import { PortableText } from '@portabletext/react'
import Image from './Image'
import styles from './text.module.scss'
import Button from '@/ui/components/button'
export default function Text({ content }) {
    console.log(content)

    return (
        <div className={styles['text']}>
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
                            return <Button link={value} />
                        },
                    },

                    block: {
                        customBlock: ({ value }) => {
                            return (
                                <div className={styles.customBlock}>
                                    {value.children[0].text}
                                </div>
                            )
                        },
                        leftAlign: ({ children }) => {
                            return <div className='text-left'>{children}</div>
                        },
                        rightAlign: ({ children }) => {
                            return <div className='text-right'>{children}</div>
                        },
                        centerAlign: ({ children }) => {
                            return <div className='text-center'>{children}</div>
                        },
                    },
                }}
            />
        </div>
    )
}
