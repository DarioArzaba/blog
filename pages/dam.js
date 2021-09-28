import Image from 'next/image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import { PageSeo } from '@/components/SEO'

import ImageGallery from 'react-image-gallery'
import React from 'react'



export default function Dam() {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Dario Arzaba Mosqueda
          </h1>
        </div>
        
		<div className="container py-12">
			
			<div className="pt-4 pb-4 space-y-2 md:space-y-5">
				<h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">
					Dibujos
				</h1>
			</div>

			<div className="pt-6 pb-6 prose dark:prose-dark max-w-none">
				<p >Descripcion</p>
			</div>

			<ImageGallery slideDuration={0} disableKeyDown={true} showIndex={true} showPlayButton={false} showNav={true} lazyload={true} showThumbnails={false} items={
				[
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Hombre3.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mano1.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Hombre1.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Hombre2.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer1.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer2.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer3.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer4.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer5.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer6.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer7.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer8.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer9.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer10.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer11.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Mujer12.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Personas1.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Personas2.jpg', description: 'Descripcion.'},
					{ original: 'https://storage.googleapis.com/bucket-dam/Pen/Retrato1.jpg', description: 'Descripcion.'},

				]
			} />

			<div className="pt-8 pb-8 prose dark:prose-dark max-w-none">
				<hr/>
			</div>

			<div className="flex flex-wrap -mx-4 overflow-hidden">
				<div className="md:w-1/2 p-2">
					<Image src="https://storage.googleapis.com/bucket-dam/Engraving/Mariposa1.jpg" width={640} height={427} />
				</div>
				<div className="md:w-1/2 p-2">
					<Image src="https://storage.googleapis.com/bucket-dam/Engraving/Mariposa2.jpg" width={640} height={427} />
				</div>
				<div className="md:w-1/2 p-2">
					<Image src="https://storage.googleapis.com/bucket-dam/Engraving/Mariposa3.jpg" width={640} height={427} />
				</div>
				<div className="md:w-1/2 p-2">
					<Image src="https://storage.googleapis.com/bucket-dam/Engraving/Mariposa4.jpg" width={640} height={427} />
				</div>
			</div>

			<div className="pt-8 pb-8 prose dark:prose-dark max-w-none">
				<hr/>
			</div>

			<div className="pt-4 pb-4 space-y-2 md:space-y-5">
				<h1 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">
					Fotos
				</h1>
			</div>

			<div className="pt-6 pb-6 prose dark:prose-dark max-w-none">
				<p>Palabras de Margarita Garcia Luna</p>
			</div>

			<div className="flex justify-center">
				<Image src="https://storage.googleapis.com/bucket-dam/Photos/1-Margarita-Garcia-Luna.jpg" width='1920' height='1368'/>
			</div>

        </div>

      </div>
    </>
  )
}


  