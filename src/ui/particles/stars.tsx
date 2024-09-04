import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from '@tsparticles/engine'
export const particlesConfig = {
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    fullScreen: {
        enable: false,
        zIndex: -1,
    },
    fpsLimit: 120,
    interactivity: {
        detectsOn: 'window',
        events: {
            onHover: {
                enable: true,
                mode: 'grab',
                parallax: {
                    enable: true,
                    force: 50,
                    smooth: 10,
                },
            },
        },
    },
    particles: {
        color: {
            value: '#fff',
        },
        links: {
            color: '#fff',
            distance: 50,
            enable: true,
            opacity: 0.1,
            width: 1,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 300,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'star',
            polygon: {
                nb_sides: 5,
            },
        },
        rotate: {
            value: 0,
            animation: {
                enable: true,
                speed: 5,
                decay: 0,
                sync: false,
            },
            direction: 'random',
            path: false,
        },
        size: {
            value: { min: 1, max: 4 },
        },
    },
    detectRetina: true,
}
