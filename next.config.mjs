/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    eslint: {
        // eslint issues with v9 and nextjs https://github.com/vercel/next.js/issues/64409
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
