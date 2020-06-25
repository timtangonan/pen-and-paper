import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { Image, Transformation } from "cloudinary-react"

import ColorSelect from "../components/color-select"

const ProductPage = ({ data }) => {
    const [colorTransformation, setColor] = useState(``)
    return (
        <div className="flex flex-col md:flex-row">
            <Image
                cloudName="timtangonan"
                publicId={data.markdownRemark.frontmatter.image}
                width="600"
                crop="scale"
                fetchFormat="auto"
                quality="auto"
                secure="true"
                className="h-full w-1/2 md:mx-8 rounded-lg">
                <Transformation rawTransformation={colorTransformation}/>
            </Image>
             <div className="mt-4 md:mt-0 md:w-1/2 md:mx-8">
                 <Link className="font-bold text-blue-800" to="/products">
                     <p>&larr; Back to Product List</p>
                 </Link>
                 <h1 className="font-bold text-4xl text-black-900">{data.markdownRemark.frontmatter.name}</h1>
                 <span className="block font-semibold text-lg text-blue-800">
                     Php{data.markdownRemark.frontmatter.price}
                 </span>
                 <button className="btn btn-blue mt-4">
                    Add to Cart
                 </button>
                 <div className="markdown mt-4" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
                 { data.markdownRemark.fields.slug === "/products/dotted-a5/" ? <ColorSelect changeColor={setColor} /> : "" }
             </div>
        </div>
    )
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id}) {
            html
            frontmatter {
                id
                name
                price
                image
            }
            fields { 
                slug
            }
        }
    }
`

export default ProductPage