'use client'
import { cn } from '@/lib/utils'

import styles from './languageChanger.module.scss'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '@/i18nConfig'

export default function LanguageChanger() {
    const { i18n } = useTranslation()
    const currentLocale = i18n.language
    const router = useRouter()
    const currentPathname = usePathname()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value

        // set cookie for next-i18n-router
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

        // redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && false) {
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
            )
        }

        router.refresh()
    }

    return (
        <select
            title='Change language'
            className={cn(styles.languageChanger)}
            onChange={handleChange}
            value={currentLocale}>
            <option value='en'>English</option>
            <option value='de'>German</option>
            <option value='es'>Spanish</option>
        </select>
    )
}
