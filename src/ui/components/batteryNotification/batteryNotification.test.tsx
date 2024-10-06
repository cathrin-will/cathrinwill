import '@testing-library/jest-dom'
import { render, screen, waitFor, act } from '@testing-library/react'
import BatteryNotification from './index'

// Mocking the Navigator.getBattery API
const mockBattery = {
    charging: true,
    level: 1,
    addEventListener: jest.fn(),
}

beforeEach(() => {
    Object.defineProperty(navigator, 'getBattery', {
        writable: true,
        value: jest.fn().mockResolvedValue(mockBattery),
    })
})

describe('BatteryNotification', () => {
    test('should not show notification when battery is not charging and level is below 100%', async () => {
        await act(async () => {
            render(<BatteryNotification />)
            await waitFor(() => {
                expect(
                    screen.getByTitle('battery-notification'),
                ).not.toBeInTheDocument()
            })
        })
    })

    // TODO fix these failing tests
    test('should show notification when battery is charging and level is 100%', async () => {
        mockBattery.charging = true
        mockBattery.level = 1

        await act(async () => {
            render(<BatteryNotification />)
            await waitFor(() => {
                expect(
                    screen.getByTitle('battery-notification'),
                ).toBeInTheDocument()
            })
        })
    })

    test('should show notification when override is true', async () => {
        await act(async () => {
            render(<BatteryNotification override={true} />)
            await waitFor(() => {
                expect(
                    screen.getByTitle('battery-notification'),
                ).toBeInTheDocument()
            })
        })
    })

    test('should not show notification when getBattery API is not available', async () => {
        global.navigator.getBattery = undefined

        await act(async () => {
            render(<BatteryNotification />)
            await waitFor(() => {
                expect(
                    screen.getByTitle('battery-notification'),
                ).not.toBeInTheDocument()
            })
        })
    })
})
