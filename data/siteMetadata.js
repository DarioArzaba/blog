/* 
Site Metadata used as Variables and selection of Providers
For providers remember to add them to next.config.js Security Policy section
plausibleDataDomain = tailwind-nextjs-starter-blog.vercel.app
simpleAnalytics = true or false
umamiWebsiteId = 123e4567-e89b-12d3-a456-426614174000
googleAnalyticsId = UA-000000-2 or G-XXXXXXX
*/

const siteMetadata = {
	theme: 'dark', // System, dark or light
	language: 'en-us',
	title: '🔥',
	author: 'Dario Arzaba',
	email: 'dario.arzaba@gmail.com',
	headerTitle: 'The Hearth of Dev 👨‍💻',
	description: 'My personal blog.',
	siteLogo: '/static/images/logo.png',
	image: '/static/images/avatar.png',
	socialBanner: '/static/images/twitter-card.png',
	siteUrl: 'https://darioarzaba.vercel.app',
	siteRepo: 'https://github.com/DarioArzaba/blog',
	github: 'https://github.com/DarioArzaba',
	twitter: 'https://twitter.com/ArzabaDario',
	facebook: 'https://www.facebook.com/darioarzaba',
	youtube: 'https://www.youtube.com/channel/UCz_oXRCswARuH2PfO7VQ-Gw',
	linkedin: 'https://www.linkedin.com/in/dario-arzaba/',

	comment: {
		provider: 'giscus',
		giscusConfig: {
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: 'pathname',
			reactions: '1',
			metadata: '0',
			theme: 'light',
			inputPosition: 'bottom',
			lang: 'en',
			darkTheme: 'transparent_dark',
			themeURL: '',
		},
	},

	analytics: {
		simpleAnalytics: false,
		plausibleDataDomain: '',
		umamiWebsiteId: '',
		googleAnalyticsId: '',
	},

}

module.exports = siteMetadata
