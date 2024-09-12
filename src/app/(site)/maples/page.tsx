import WrapIt from '@/ui/layout/wrap'
import styles from './maple.module.scss'
import { cn } from '@/lib/utils'
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
                            <div className={cn(styles['heart'])}>
                                <div
                                    className={cn(
                                        styles['heart___inner'],
                                        styles['heart__selected'],
                                        styles['heart__got-selected'],
                                    )}>
                                    <svg
                                        className={cn(
                                            styles['heart__icon'],
                                            styles['heart__icon_fill'],
                                            styles['heart'],
                                            styles['heart__filled'],
                                        )}
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'>
                                        <path
                                            d='M0 0h24v24H0z'
                                            fill='none'
                                        />
                                        <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                                    </svg>
                                    <svg
                                        className={cn(
                                            styles['heart__icon'],
                                            styles['heart__icon_fill'],
                                            styles['heart_explosion'],
                                        )}
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'>
                                        <circle
                                            className={cn(styles['explosion'])}
                                            cx='12'
                                            cy='12'
                                            r='8'></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='20'
                                            cy='12'
                                            r='.75'
                                            style={{
                                                fill: '#147de5',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='19.91846879578665'
                                            cy='10.650420754361766'
                                            r='.5'
                                            style={{
                                                fill: '#ffc000',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='16.972879746165315'
                                            cy='18.266615277019866'
                                            r='.75'
                                            style={{
                                                fill: '#147de5',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='16.926943203175824'
                                            cy='18.54486444277137'
                                            r='.5'
                                            style={{
                                                fill: '#147de5',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='10.182383242455304'
                                            cy='19.79078104702556'
                                            r='.75'
                                            style={{
                                                fill: '#1bd6b4',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='10.486311661105013'
                                            cy='19.872096630662394'
                                            r='.5'
                                            style={{
                                                fill: '#b25baf',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='4.76742286386351'
                                            cy='15.419039041870638'
                                            r='.75'
                                            style={{
                                                fill: '#ffc000',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='5.634167923999488'
                                            cy='14.000702054580593'
                                            r='.5'
                                            style={{
                                                fill: '#ffc000',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='4.825932669326824'
                                            cy='8.45983645364118'
                                            r='.75'
                                            style={{
                                                fill: '#1bd6b4',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='4.833803538780229'
                                            cy='9.494569493035156'
                                            r='.5'
                                            style={{
                                                fill: '#147de5',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='10.313633604553763'
                                            cy='4.179759058679224'
                                            r='.75'
                                            style={{
                                                fill: '#147de5',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='10.80120673085787'
                                            cy='4.270899612031962'
                                            r='.5'
                                            style={{
                                                fill: '#b25baf',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-1'],
                                            )}
                                            cx='17.077543007541077'
                                            cy='5.817884099552103'
                                            r='.75'
                                            style={{
                                                fill: '#ffc000',
                                            }}></circle>
                                        <circle
                                            className={cn(
                                                styles['particle'],
                                                styles['particle-2'],
                                            )}
                                            cx='17.270852881861437'
                                            cy='5.105744706123251'
                                            r='.5'
                                            style={{
                                                fill: '#b25baf',
                                            }}></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cover}>
                            <p className='text-xl'>Open me</p>
                        </div>
                    </div>
                </div>
            </div>
        </WrapIt>
    )
}
