/* 
This component is used to generate the frame that holds Giscus comments.
It also checks for the theme used to apply it to the frame.
*/

import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

const Giscus = () => {
	const [enableLoadComments, setEnabledLoadComments] = useState(true)
	const { theme, resolvedTheme } = useTheme()
	const commentsTheme =
		siteMetadata.comment.giscusConfig.themeURL === ''
		? theme === 'dark' || resolvedTheme === 'dark'
			? siteMetadata.comment.giscusConfig.darkTheme
			: siteMetadata.comment.giscusConfig.theme
		: siteMetadata.comment.giscusConfig.themeURL
	const COMMENTS_ID = 'comments-container'

	const LoadComments = useCallback(() => {
		
		setEnabledLoadComments(false)
		const {
			repo,
			repositoryId,
			category,
			categoryId,
			mapping,
			reactions,
			metadata,
			inputPosition,
			lang,
		} = siteMetadata?.comment?.giscusConfig

		const script = document.createElement('script')
		script.src = 'https://giscus.app/client.js'
		script.setAttribute('data-repo', repo)
		script.setAttribute('data-repo-id', repositoryId)
		script.setAttribute('data-category', category)
		script.setAttribute('data-category-id', categoryId)
		script.setAttribute('data-mapping', mapping)
		script.setAttribute('data-reactions-enabled', reactions)
		script.setAttribute('data-emit-metadata', metadata)
		script.setAttribute('data-input-position', inputPosition)
		script.setAttribute('data-lang', lang)
		script.setAttribute('data-theme', commentsTheme)
		script.setAttribute('crossorigin', 'anonymous')
		script.setAttribute('data-loading', 'lazy')
		script.async = true

		const comments = document.getElementById(COMMENTS_ID)

		if (comments) comments.appendChild(script)

		return () => {
			const comments = document.getElementById(COMMENTS_ID)
			if (comments) comments.innerHTML = ''
		}

	}, [commentsTheme])

	useEffect(() => {
		const iframe = document.querySelector('iframe.giscus-frame')
		if (!iframe) return
			LoadComments()
	}, [LoadComments])

	return (
		<div className="pt-6 pb-6 text-center text-gray-900 dark:text-gray-300">
			{enableLoadComments && <button className="border border-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-800 hover:text-gray-200" onClick={LoadComments}>Leave a Comment</button>}
			<div className="giscus" id={COMMENTS_ID} />
		</div>
	)
}

export default Giscus