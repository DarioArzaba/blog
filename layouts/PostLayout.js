import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'

export default function PostLayout({ frontMatter, next, prev, children }) {
	
	const {title, tags, images} = frontMatter

	return (

		<SectionContainer>
		
		<BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
		
		<ScrollTopAndComment />

		<article>
			
			<div>
				<header>

					<div className="space-y-1 border-b border-gray-200 pt-15 pt-10 dark:border-gray-700 text-center">

						<div className="grid grid-rows-2 grid-flow-col gap-4">
								
								<div>
									<PageTitle tagsKey = {tags}>{title}</PageTitle>
								</div>

								<div>
										{tags.map((tag) => (
											<Tag key={tag} text={tag} />
										))}
								</div>
								
						</div>

					</div>

				</header>

				<div
					className="divide-y divide-gray-200 pb-0 dark:divide-gray-700 xl:divide-y-0 "
					style={{ gridTemplateRows: 'auto 1fr' }}
				>
					
					<div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
						<div className="prose max-w-none pt-10 pb-5 dark:prose-dark">{children}</div>
					</div>
					
					<Comments frontMatter={frontMatter} />
					
					<footer>
						<div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
							
							{prev && (
								<div className="pt-4 xl:pt-8">
									<Link
									href={`/blog/${prev.slug}`}
									className="text-slate-500 hover:text-slate-600 dark:hover:slate-primary-400"
									>
									&larr; {prev.title}
									</Link>
								</div>
							)}

							{next && (
								<div className="pt-4 xl:pt-8">
									<Link
									href={`/blog/${next.slug}`}
									className="text-slate-500 hover:text-slate-600 dark:hover:slate-primary-400"
									>
									{next.title} &rarr;
									</Link>
								</div>
							)}

						</div>
					</footer>

				</div>

			</div>

		</article>

		</SectionContainer>

	)

}
