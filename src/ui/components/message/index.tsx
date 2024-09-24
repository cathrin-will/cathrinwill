import { useState } from 'react'
import { cn } from '@/lib/utils'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import styles from './message.module.scss'

export default function Message({ type = 'error', content, className }: Model.Message) {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
    }

    if (!isVisible) {
        return null
    }

    const props = {
        className: cn(className, styles['message'], type ? styles[`message--${type}`] : ''),
    }

    return (
        <div {...props}>
            <button
                className={styles['message__close']}
                aria-label="Close message"
                onClick={handleClose}
            >
                <IoMdCloseCircleOutline />
                <span className="sr-only">Close message</span>
            </button>
            <h3 className="text-xl font-bold capitalize">{type}</h3>
            <p>{content}</p>
        </div>
    )
}
