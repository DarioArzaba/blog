/*
export default function SectionContainer({ children }) {
	return <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
}
*/

import DamGallery from '@/components/DamGallery'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PostLayout({ frontMatter, children }) {
	
	const {title} = frontMatter

	return (

		<article>
			
			<div>
				<header className='bg-black ml-[-30%] mr-[-30%] mt-[7%]'>
	
						<h1 className="text-center py-72 text-3xl font-['Poiret_One'] text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-8xl md:leading-14">
							Dario Arzaba Mosqueda
						</h1>

				</header>

				<div
					className="divide-y divide-gray-200 pt-40 dark:divide-gray-700 xl:divide-y-0 "
					style={{ gridTemplateRows: 'auto 1fr' }}
				>
					
					<div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
						<div className="prose max-w-none pt-10 pb-5 dark:prose-dark">{children}</div>

						<DamGallery />

					</div>
					
					<Comments frontMatter={frontMatter} />
					
				</div>

			</div>

		</article>



	)

}
