// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// jest.setup.js or jest.setup.ts
window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        }
    }
