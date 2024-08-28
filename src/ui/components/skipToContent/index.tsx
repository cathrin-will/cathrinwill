import styles from './skipToContent.module.scss'
export default function SkipToContent({}: {}) {
    return (
        <a
            href='#main'
            className={styles.skip}
            tabIndex={0}>
            Skip to content
        </a>
    )
}
