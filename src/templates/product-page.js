import React, { useState, useRef, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { Image, Transformation } from "cloudinary-react"

import ColorSelect from "../components/color-select"

const ProductPage = ({ data }) => {
    const [colorTransformation, setColor] = useState(``)
    let [imageSource, setImageSource] = useState(``)
    let [colorName, getColor] = useState(``)
    const imageRef = useRef(null)

    useEffect(() => {
        setImageSource(() => imageRef.current.element.src)
        if (imageRef.current && imageRef.current.element) {
            const observer = new MutationObserver(muts => {
                muts.forEach(m => {
                    if(m.type === 'attributes' && m.attributeName === 'src') {
                        setImageSource(() => m.target.src)
                    }
                })
            })
            observer.observe(imageRef.current.element, {
                attributes: true
            })
        }
    }, [imageSource])

    if (colorName.length === 0) {
        getColor(() => colorName = 'original')
    }

    return (
        <div className="flex flex-col md:flex-row">
            <Image
                ref={imageRef}
                cloudName="timtangonan"
                publicId={data.markdownRemark.frontmatter.image}
                width="400"
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
                 <button className="btn btn-blue mt-4 snipcart-add-item" 
                    data-item-id={data.markdownRemark.frontmatter.id}
                    data-item-custom1-name=""
                    data-item-custom1-options={colorName}
                    data-item-price={data.markdownRemark.frontmatter.price}
                    data-item-url={"https://pen-and-paper.vercel.app/" + data.markdownRemark.fields.slug}
                    data-item-name={data.markdownRemark.frontmatter.name}
                    data-item-image={imageSource}>
                    Add to Cart
                 </button>
                 <div className="markdown mt-4" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
                 { data.markdownRemark.fields.slug === "/products/dotted-a5/" ? <ColorSelect changeColor={setColor} getColorName={getColor} /> : "" }
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