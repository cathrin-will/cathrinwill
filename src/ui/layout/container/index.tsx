import { cn } from '@/lib/utils'

import styles from './container.module.scss'
const Container = ({ children, className, containerSize }: Model.Container) => {
    return (
        <div
            className={cn(
                styles.container,
                className,
                containerSize ? styles[containerSize] : '',
            )}>
            {children}
        </div>
    )
}

export default Container
