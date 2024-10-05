'use client'

import { I18nextProvider } from 'react-i18next'
import initTranslations from '@/lib/i18n/translations'
import { createInstance } from 'i18next'
import React from 'react'

interface TranslationsProviderProps {
    children: React.ReactNode
    locale: string
    namespaces: string[]
    resources: {
        [locale: string]: {
            [namespace: string]: {
                [key: string]: string
            }
        }
    }
}

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
    resources,
}: TranslationsProviderProps) {
    console.log(resources)
    const i18n = createInstance()

    initTranslations(locale, namespaces, i18n, resources)

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
