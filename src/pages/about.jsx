import React from 'react'
// import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <Layout>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>
                I'm an experienced and passionate Front-end Developer, I've worked at a variety of digital and marketing agencies for over 11~ years. I started my career in 2007, and I spent 4 years getting a Computer Maths Foundation degree and a Web development with Business BSc (Hons) degree.
            </p>
            <p>
                I have strong core skills in writing semantic, accessibility friendly <strong>HTML</strong>. Modular and modern<strong>CSS</strong> using <strong>SCSS</strong>. And I have experience in using few flavours of <strong>javascript</strong> over the years, my favourite being vanilla and react.
            </p>
        </Layout>
    )
}

export default IndexPage
