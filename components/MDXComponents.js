/* 
This component is used to import MDX components to be used in other components

- By defautl image (next render), TOCInline (Table of Contents), Customlinks (Links) and Pre
- Added by my include the react-image-gallery
- The MDX Layout Renderer is able to take information from a MD document and use it to create a layout
	- This is how the About section is rendered
*/

import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

import ImageGallery from 'react-image-gallery'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

export const MDXComponents = {
	ImageGallery,
	Image,
	TOCInline,
	a: CustomLink,
	pre: Pre,
	BlogNewsletterForm: BlogNewsletterForm,

	wrapper: ({ components, layout, ...rest }) => {
		const Layout = require(`../layouts/${layout}`).default
		return <Layout {...rest} />
	},

}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
	const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}




