'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
    useReportWebVitals((metric) => {
        if (metric.rating !== 'good') {
            console.warn('WebVitals', metric)
        } else {
            console.info('WebVitals', metric)
        }
    })

    return null
}
