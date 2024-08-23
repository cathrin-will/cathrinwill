import { cn } from '@/lib/utils'

import styles from './section.module.scss'
const Section = ({ children, className }: Model.Section) => {
    return (
        <section className={cn(styles.section, className)}>{children}</section>
    )
}

export default Section
