/* 
This is the page that contains the app information including:

- Importing tailwind, prism and katex React components (Default)
- Importing additional components such as the image gallery css
- It is also where the logic for changing the theme is applied via the Next-Themes package
*/

import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
				<Head>
					<meta content="width=device-width, initial-scale=1" name="viewport" />
				</Head>
				{isDevelopment && isSocket && <ClientReload />}
				<Analytics />
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
		</ThemeProvider>
	)
}

