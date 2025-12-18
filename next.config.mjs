/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'src.guap.ru',
				pathname: '/logos/guap/**',
			},
			{
				protocol: 'https',
				hostname: 'pro.guap.ru',
				pathname: '/avatars/**',
			},
			{
				protocol: 'https',
				hostname: 'fs.guap.ru',
				pathname: '/_persons/**',
			},
		],
	},
};

export default nextConfig;
