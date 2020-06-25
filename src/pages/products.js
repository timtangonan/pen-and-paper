import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from "cloudinary-react"

const ProductsPage = ({ data }) => {
    const products = data.allMarkdownRemark.edges
    return (
        <div className="product-list mt-6">
            {products.map(({ node }) => {
                return (
                    <Link key={node.fields.slug} to={node.fields.slug} className="rounded-lg shadow hover:shadow-md">
                        <div className="relative pb-full">
                            <Image 
                                cloudName="timtangonan"
                                publicId={node.frontmatter.image}
                                width="300"
                                height="200"
                                crop="fill"
                                fetchFormat="auto"
                                quality="auto"
                                gravity="auto"
                                secure="true"
                                className="object-cover">
                            </Image>
                        </div>
                        <div className="bg-white p-4">
                            <div className="font-bold text-2xl">
                                {node.frontmatter.name}
                            </div>
                            <div className="font-semibold text-l text-gray-600">
                                Php {node.frontmatter.price}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export const pageQuery = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        name
                        price
                        image
                    }
                }
            }
        }
    }
`

export default ProductsPage