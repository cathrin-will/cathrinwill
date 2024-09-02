import WrapIt from '@/ui/layout/wrap'
import styles from './maple.module.scss'
export default function Page() {
    return (
        <WrapIt wrapIt={true}>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <div className={styles.inner}>
                            <h1 className={styles.h1}>Congratulations</h1>
                            <h2 className={styles.h2}>🍁 The Maples 🍁</h2>
                            <h2 className={styles.h2}>Victoria & Jan</h2>
                        </div>
                        <div className={styles.cover}>
                            <p>Hover Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </WrapIt>
    )
}
