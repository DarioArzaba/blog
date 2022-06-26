/* 
This component is used to generate the title of a new page form the MDX metadata
*/

export default function PageTitle({ children , tagsKey}) {

	if (tagsKey != null) {
		var exists = Object.values(tagsKey).includes("poetry");
	} else {
		exists = false;
	}

	if (exists) {
		return (
			<>
			<h1 className="text-6xl font-poetryTitle leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-8xl md:leading-14 break-words">
				{children} 
			</h1>
			</>
		)
	} else {
		return (
			<h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 break-words">
				{children}
			</h1>
		)
	}
}

