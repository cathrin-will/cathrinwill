import { useState } from 'react'
import { cn } from '@/lib/utils'
import { IoMdCloseCircle } from 'react-icons/io'

// styles
import styles from './message.module.scss'

export default function Message({
    children,
    type = 'error',
    className,
}: Model.Message) {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
    }

    if (!isVisible) {
        return null
    }

    const props = {
        className: cn(
            className,
            styles['message'],
            type ? styles[`message--${type}`] : '',
        ),
    }

    return (
        <div {...props}>
            <button
                className={styles['message__close']}
                aria-label='Close message'
                onClick={handleClose}>
                <IoMdCloseCircle />
                <span className='sr-only'>Close message</span>
            </button>

            {children}
        </div>
    )
}
