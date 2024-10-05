'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Extend the Navigator interface to include getBattery
// https://github.com/microsoft/TypeScript/issues/15314 - issue with battery and typescript
declare global {
    interface Navigator {
        getBattery?: () => Promise<BatteryManager>
    }
    interface BatteryManager extends EventTarget {
        charging: boolean
        level: number
        addEventListener(
            type: 'chargingchange' | 'levelchange',
            listener: (this: BatteryManager, ev: Event) => void,
        ): void
    }
}

// ui
import Message from '@/ui/components/message'

//  styles
import styles from './batteryNotification.module.scss'

export default function BatteryNotification({ override = false }) {
    const { t } = useTranslation()
    const [showBatteryNotification, setShowBatteryNotification] =
        useState(false)
    const [batteryLevel, setBatteryLevel] = useState(0)
    const [charging, setCharging] = useState(false)

    const checkBatteryAPIAndSetup = async () => {
        if (navigator.getBattery) {
            try {
                const battery = await navigator.getBattery()
                setCharging(battery.charging)
                setBatteryLevel(battery.level)

                battery.addEventListener('chargingchange', () =>
                    setCharging(battery.charging),
                )
                battery.addEventListener('levelchange', () =>
                    setBatteryLevel(battery.level),
                )
            } catch (error) {
                setShowBatteryNotification(false)
            }
        } else {
            setShowBatteryNotification(false)
        }
    }
    useEffect(() => {
        if (!override) {
            checkBatteryAPIAndSetup()
        }
    }, [override])

    useEffect(() => {
        if (override) {
            setShowBatteryNotification(true)
        } else {
            if (charging && batteryLevel > 0) {
                setShowBatteryNotification(true)
            } else {
                setShowBatteryNotification(false)
            }
        }
    }, [batteryLevel, charging, override])

    return (
        showBatteryNotification && (
            <div
                className={cn(styles.batteryNotification)}
                title='battery-notification'>
                <Message type='info'>
                    <h2 className='text-2xl mb-2'>⚡ 🌱</h2>
                    <p>{t('battery_warning')}</p>
                </Message>
            </div>
        )
    )
}
