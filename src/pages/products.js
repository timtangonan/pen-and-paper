import React from "react"
import { graphql, Link } from "gatsby"

const ProductsPage = ({ data }) => {
    const products = data.allMarkdownRemark.edges
    return (
        <div className="product-list">
            {products.map(({ node }) => {
                return (
                    <Link key={node.fields.slug} to={node.fields.slug} className="rounded-lg shadow hover:shadow-md">
                        <div className="relative pb-full">
                            <p>Image here.</p>
                        </div>
                        <div className="bg-white p-4">
                            <div className="font-bold text-2xl">
                                {node.frontmatter.name}
                            </div>
                            <div className="font-semibold text-l">
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
                        id
                    }
                }
            }
        }
    }
`

export default ProductsPage