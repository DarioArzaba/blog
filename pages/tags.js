/* 
This is the page that contains the tags for the blog

- It imports the link, seo, siteMetadata components.
- But the most important is the Tag component to generate the groups of posts.
*/

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
	const tags = await getAllTags('blog')
	return { props: { tags } }
}

export default function Tags({ tags }) {
	
	const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
	
	return (

		<>

		<PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
		
		<div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
			
			<div className="flex flex-wrap mx-5">

				{Object.keys(tags).length === 0 && 'No tags found.'}
				{sortedTags.map((t) => {
					return (
						<div key={t} className="mt-2 mb-2 mr-5 font-tags text-xl">
							<Tag text={t} />
							<Link
								href={`/tags/${kebabCase(t)}`}
								className="-ml-2 text-xl font-tags uppercase text-gray-600 dark:text-gray-300"
							>
								{`[${tags[t]}]`}
							</Link>
						</div>
					)
				})}

			</div>
		
		</div>

		</>

	)
}
