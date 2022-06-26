/* 
IN CASE KATEX doesn't work
<link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Main-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Math-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Size2-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Size4-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css" integrity="sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw" crossOrigin="anonymous" />
*/

import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
		
        <Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
			
			<link href="https://fonts.googleapis.com/css2?family=Turret+Road&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Gentium+Basic&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Square+Peg&display=swap" rel="stylesheet"/>
			
			<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
			<link rel="manifest" href="/static/favicons/site.webmanifest" />
			<link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
			<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>

        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}

export default MyDocument
