import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import Layout from '../components/layout'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5%;
`
export default ({ data }) => {
    return (
        <Layout>
            <h1>Past work</h1>
            <Grid>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    // const thumbnail = node.frontmatter.featuredImage.childImageSharp.fluid
                    return (
                        <div key={node.id}>
                            {/* {node.frontmatter.link === false ? '<div>' : '<a href="node.frontmatter.link">'} */}
                            <p>{node.frontmatter.link}</p>
                            {/* <Img fluid={thumbnail} /> */}
                            <h2>{node.frontmatter.title}</h2>
                            <span>{node.frontmatter.date}</span>
                            <p>{node.excerpt}</p>
                        </div>
                    )
                })}
            </Grid>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`
