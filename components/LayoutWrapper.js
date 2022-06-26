/* 
This component renders the general layout of the site

- Section Container (Component)
		- Header
			- Header Title Link
				- Logo
				- Header Title text
			- Header Top Menu NavLinks
			- Theme Switch Button (Component)
			- Mobile Nav Menu (Component)
		- Main Content (Children)
		- Footer (Component)
*/

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
	return (
		
		<>

		<SectionContainer>

			<div className="flex h-screen flex-col justify-between">
				
				<header className="flex items-center justify-between py-12">
				
					<div>
						<Link href="/" aria-label={siteMetadata.headerTitle}>
						
							<div className="flex items-center justify-between">

								{/* <div className="mr-3"> <Logo /> </div> */}
								
								{typeof siteMetadata.headerTitle === 'string' ? (
									<div className="font-title fonthidden text-xl md:text-2xl xl:text-3xl font-semibold sm:block">
										{siteMetadata.headerTitle}
									</div>
								) : (
									siteMetadata.headerTitle
								)}

							</div>

						</Link>
					</div>

					<div className="flex items-center text-base leading-5">

						<div className="hidden sm:block">

							{headerNavLinks.map((link) => (
								<Link key={link.title} href={link.href} className="font-title p-1 text-xl md:text-xl xl:text-2xl font-medium text-gray-900 dark:text-gray-100 sm:p-4" > {link.title} </Link>
							))}
						
						</div>
						
						<ThemeSwitch />
						
						<MobileNav />
						
					</div>

				</header>

				<main className="mb-auto">{children}</main>
				
				<Footer />
			
			</div>

		</SectionContainer>
		</>
	)
}



export default LayoutWrapper


/*
There was an attempt at adding a gradient
Adding before the section container

<HeaderGradient />

Adding before the export default
function HeaderGradient() {
		return (
		<div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-2]">
			<div className="absolute inset-x-0 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 opacity-40 blur-3xl top-28 h-[600px]" />
		</div>
		);
}
*/