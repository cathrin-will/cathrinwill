import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './button.module.scss'

interface Props {
    children?: ReactNode
    className?: string
    disabled?: boolean
    href?: string
    onClick?: () => void
    target?: string
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
    children,
    href,
    className,
    onClick,
    disabled,
    type = 'submit',
    target = '_self',
    ...props
}: Props) => {
    const classes = `${styles['button']}
    ${className ? className : ''}
    ${disabled ? styles['button--disabled'] : ''}`
    if (href) {
        return (
            <Link href={href}>
                <a className={classes} onClick={onClick} type={type} target={target}>
                    {children}
                </a>
            </Link>
        )
    }
    if (!href) {
        return (
            <button
                className={classes}
                onClick={onClick}
                disabled={disabled}
                type={type}
                {...props}
            >
                {children}
            </button>
        )
    }
    return <>Button Error!</>
}

export default Button
