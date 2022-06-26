/* 
This component is used with GoogleAnalytics.js Plausible.js and Umami.js to import their components into the blog.
*/

import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import Umami from './Umami'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
	return (
		<>
			{isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
			{isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
			{isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
			{isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
		</>
	)
}

export default Analytics
