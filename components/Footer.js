/* 
This component renders the footer in a page

- Currently it displays social media icons, my name, the year, the title and a message
*/

import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
	return (
		<footer>
			<div className="mt-10 flex flex-col items-center">

				<div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">

					<div>{siteMetadata.author}</div>

					<div>{` • `}</div>
					<div>{`${new Date().getFullYear()}`}</div>

					<div>{` • `}</div>
					<Link href="/">{siteMetadata.headerTitle}</Link>

				</div>

				<div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
					<Link href="https://openpuppies.com/#DS2IZ6K">
						Have a nice day! 🐶❤️
					</Link>
				</div>

			</div>
		</footer>
	)
}
