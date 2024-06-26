/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['iili.io'],
    },
    async headers() {
        return [
        {
            source: '/(.*)',
            headers: [
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
            },
            ],
        },
        ]
    },
}

module.exports = nextConfig
