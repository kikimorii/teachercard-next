/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'src.guap.ru',
				pathname: '/logos/guap/**',
			},
		],
	},
};

export default nextConfig;
