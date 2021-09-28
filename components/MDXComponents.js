import Image from 'next/image'
import CustomLink from './Link'
import ImageGallery from 'react-image-gallery'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

const MDXComponents = {
  Image,
  a: CustomLink,
  ImageGallery
}

export default MDXComponents
