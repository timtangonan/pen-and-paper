import React from "react"
import { graphql } from "gatsby"

const ProductPage = ({ data }) => {
    return (
        <>
            <p>{data.markdownRemark.frontmatter.name}</p>
        </>
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
            }
            fields { 
                slug
            }
        }
    }
`

export default ProductPage