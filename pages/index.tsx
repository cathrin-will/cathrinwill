import Card from '@/components/home/card'
import Layout from 'layout'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import WebVitals from '@/components/home/web-vitals'
import ComponentGrid from '@/components/home/component-grid'
import Image from 'next/image'
import Button from '@/components/button'
export default function Home() {
    return (
        <Layout>
            <motion.div
                className="max-w-xl px-5 xl:px-0"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                <motion.h1
                    className="to-stone-500 text-transparent bg-gradient-to-br from-black bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>Building blocks for your Next project</Balancer>
                </motion.h1>
                <motion.p
                    className="text-gray-500 mt-6 text-center md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>
                        An opinionated collection of components, hooks, and utilities for your
                        Next.js project.
                    </Balancer>
                </motion.p>
                <motion.div>
                    <Balancer>
                        <Button>test</Button>
                    </Balancer>
                </motion.div>
            </motion.div>
            {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
            <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
                {features.map(({ title, description, demo, large }) => (
                    <Card
                        key={title}
                        title={title}
                        description={description}
                        demo={title === 'Beautiful, reusable components' ? <ComponentGrid /> : demo}
                        large={large}
                    />
                ))}
            </div>
        </Layout>
    )
}

const features = [
    {
        title: 'Beautiful, reusable components',
        description:
            'Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)',
        large: true,
    },
    {
        title: 'Performance first',
        description:
            'Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.',
        demo: <WebVitals />,
    },
    {
        title: 'Hooks, utilities, and more',
        description: 'Precedent offers a collection of hooks, utilities, and `@vercel/og`',
        demo: (
            <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
                <span className="font-mono font-semibold">useIntersectionObserver</span>
                <span className="font-mono font-semibold">useLocalStorage</span>
                <span className="font-mono font-semibold">useScroll</span>
                <span className="font-mono font-semibold">nFormatter</span>
                <span className="font-mono font-semibold">capitalize</span>
                <span className="font-mono font-semibold">truncate</span>
            </div>
        ),
    },
]
