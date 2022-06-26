const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const ContentSecurityPolicy = `
	default-src 'self';
	style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
	font-src 'self' https://fonts.gstatic.com;
	script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app;
	img-src * blob: data:;
	media-src 'none';
	connect-src *;
	frame-src giscus.app youtube.com www.youtube.com
`
const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, ''),
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
]

module.exports = withBundleAnalyzer({

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		]
	},

	/*
	async rewrites() {
		return {
			beforeFiles: [
				// Rewrite to prevent a problem when deploying at vercel
				// which directs a user to the index.xml instead of index.html
				// https://github.com/timlrx/tailwind-nextjs-starter-blog/issues/16
				{
					source: '/',
					destination: '/index',
				},
			],
		}
	},
	*/

	/*
	images: { domains: ['storage.googleapis.com'], },
	future: { webpack5: true, },
	*/

	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	eslint: { dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'], },
	
	webpack: (config, { dev, isServer }) => {

		/*
		config.module.rules.push({
			test: /\.(png|jpe?g|gif|mp4)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						publicPath: '/_next',
						name: 'static/media/[name].[hash].[ext]',
					},
				},
			],
		})
		*/
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
	
		if (!dev && !isServer) {
			// Replace React with Preact only in client production build
			Object.assign(config.resolve.alias, {
			'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
			})
		}
	
		return config
	},

})