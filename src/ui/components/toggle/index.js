'use client'
import styles from './toggle.module.scss'
import { useState, useEffect } from 'react'

export default function Toggle({}) {
    const [theme, setTheme] = useState('system')

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
            ? 'dark'
            : 'light'
        const savedTheme = localStorage.getItem('theme') || systemTheme
        setTheme(savedTheme)
        applyTheme(savedTheme)
    }, [])
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light')
        } else if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
        }
    }
    const toggleTheme = () => {
        const newTheme =
            theme === 'system' || theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)

        applyTheme(newTheme)
    }
    return (
        <div className={styles['day-night']}>
            <label htmlFor='checkbox'>
                <input
                    type='checkbox'
                    className={styles.checkbox}
                    id='checkbox'
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
                <div className={styles.toggle}>
                    <div className={styles['sun-or-moon']}></div>
                </div>
            </label>
        </div>
    )
}
