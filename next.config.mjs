/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/fabricas',
                permanent: false,
            }
        ]
    },
};

export default nextConfig;
