/* 
This component renders NEXT images by caching them
const Image = ({ ...rest }) => <NextImage {...rest} />
export default Image

*/

import NextImage from 'next/image'

const Image = ({ ...rest }) => <> <div style={{ display: "flex", justifyContent: "center" , padding: "3em 0em"}} > <NextImage {...rest} /> </div> </>

export default Image
