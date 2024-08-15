import { cn } from '@/lib/utils'

import styles from './container.module.scss'
const Container = ({ children, className }: Sanity.Container) => {
    return <div className={cn(styles.container, className)}>{children}</div>
}

export default Container
