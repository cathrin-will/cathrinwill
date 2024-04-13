import styles from './footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            © cathrinwill {new Date().getFullYear()}
            <a href='mailto:ann@cathrinwill.com'>ann@cathrinwill.com</a>
        </footer>
    )
}

export default Footer
