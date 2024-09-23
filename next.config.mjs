/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en-us/home',
                permanent: true,
            },
            {
                source: '/:locale(en-us|pt-br|es)',
                destination: '/:locale/home',
                permanent: true,
            },
            {
                source: '/(home|tos)',
                destination: '/en-us/home',
                permanent: true,
            }
        ];
    },
};

export default nextConfig;
