import Image from 'next/image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import { PageSeo } from '@/components/SEO'

import ImageGallery from 'react-image-gallery'
import React from 'react'


export default function DamGallery() {
  return (
    <>


      <div className="divide-y divide-gray-200 dark:divide-gray-700">

		<div className="container py-12">
			
			<div className="pt-4 pb-4 space-y-2 md:space-y-5"><h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">Lapiz y Carbon</h1></div>

			<ImageGallery slideDuration={0} disableKeyDown={true} showIndex={true} showPlayButton={false} showNav={true} lazyload={true} showThumbnails={false} items={
				[
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano19.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano4.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano5.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano6.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano7.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano8.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano9.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano10.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano11.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano12.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano13.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano14.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano15.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano16.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano17.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano18.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano20.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano21.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano22.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/CuerpoHumano23.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Abstracto1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Arquitectura1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Mujer1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Mujer2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Mujer3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Mujer4.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Hombre1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Hombre2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Hombre3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Mariposas1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Naturaleza1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Naturaleza2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Paisaje1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Personas1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Personas2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Personas3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pencil/Retrato1.jpg'},

				]
			} />


			<div className="pt-4 pb-4 space-y-2 md:space-y-5"><h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">Pluma Tinta</h1></div>

			<ImageGallery slideDuration={0} disableKeyDown={true} showIndex={true} showPlayButton={false} showNav={true} lazyload={true} showThumbnails={false} items={
				[
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Hombre3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mano1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Hombre1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Hombre2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer4.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer5.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer6.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer7.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer8.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer9.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer10.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer11.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer12.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Personas1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Personas2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Retrato1.jpg'},

				]
			} />

			<div className="pt-8 pb-8 prose dark:prose-dark max-w-none"><hr/></div>

			<div className="pt-4 pb-4 space-y-2 md:space-y-5"><h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">Grabados</h1></div>

			<ImageGallery slideDuration={0} disableKeyDown={true} showIndex={true} showPlayButton={false} showNav={true} lazyload={true} showThumbnails={false} items={
				[
					{ original: 'https://storage.googleapis.com/bucket-dam/Engraving/Mariposa1.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Engraving/Mariposa2.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Engraving/Mariposa3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Engraving/Mariposa3.jpg'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Engraving/Mariposa4.jpg'},
				]
			} />

			<div className="pt-8 pb-8 prose dark:prose-dark max-w-none"><hr/></div>

			<div className="pt-4 pb-4 space-y-2 md:space-y-5"><h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">Fotografia</h1></div>

			<ImageGallery slideDuration={0} disableKeyDown={true} showIndex={true} showPlayButton={false} showNav={true} lazyload={true} showThumbnails={false} items={
				[
					{ original: 'https://storage.googleapis.com/bucket-dam/Photos/1-Margarita-Garcia-Luna.jpg', description:'Palabras de Margarita Garcia Luna'},
				]
			} />

			<div className="pt-8 pb-8 prose dark:prose-dark max-w-none"><hr/></div>

			<div className="pt-4 pb-4 space-y-2 md:space-y-5"><h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">Pastel</h1></div>

			<ImageGallery slideDuration={0} disableKeyDown={true} showIndex={true} showPlayButton={false} showNav={true} lazyload={true} showThumbnails={false} items={
				[
					{ original: 'https://storage.googleapis.com/bucket-dam/Pastel/Naturaleza1.jpg'},
				]
			} />


        </div>

      </div>
    </>
  )
}


  