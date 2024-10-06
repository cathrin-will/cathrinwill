// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'

// let headers = { 'accept-language': 'en-US,en;q=0.5' }
// let languages = new Negotiator({ headers }).languages()
// let locales = ['en-GB', 'de-DE', 'es-ES']
// let defaultLocale = 'en-GB'

// match(languages, locales, defaultLocale) // -> 'en-US'

import { i18nRouter } from 'next-i18n-router'
import i18nConfig from '@/i18nConfig'

export function middleware(request) {
    return i18nRouter(request, i18nConfig)
}

export const config = {
    matcher: '/((?!api|static|admin|.*\\..*|_next).*)',
}
