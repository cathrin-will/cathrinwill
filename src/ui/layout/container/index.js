import styles from './container.module.scss'
import { cn } from '@/lib/utils'
const Container = ({ children, className }) => {
    return <div className={cn(styles.container, className)}>{children}</div>
}

export default Container
