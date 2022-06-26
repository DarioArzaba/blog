/* 
This component allows for the creation of table of contents
*/

const TOCInline = ({
	toc,
	indentDepth = 3,
	fromHeading = 1,
	toHeading = 6,
	asDisclosure = false,
	exclude = '',
}) => {

	const re = Array.isArray(exclude)
		? new RegExp('^(' + exclude.join('|') + ')$', 'i')
		: new RegExp('^(' + exclude + ')$', 'i')

	const filteredToc = toc.filter(
		(heading) =>
		heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
	)

	const tocList = (
		<ul>
			{filteredToc.map((heading) => (
				<li key={heading.value} className={`${heading.depth >= indentDepth && 'ml-6'}`}>
					<a href={heading.url}>{heading.value}</a>
				</li>
			))}
		</ul>
	)

	return (
		<>
		{asDisclosure ? (
			<details open>
				<summary className="ml-6 pt-4 pb-4 text-xl font-sans">Table of Contents</summary>
				<div className="ml-6">{tocList}</div>
			</details>
		) : (
			tocList
		)}
		</>
	)
}

export default TOCInline
