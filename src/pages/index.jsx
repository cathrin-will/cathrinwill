import React from 'react'
// import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 70% 25%;
    grid-gap: 5%;
`
const StyledImg = styled(Img)`
    border-radius: 50%;
    shape-outside: circle(50%);
    float: right;
    width: 300px;
    height: 300px;
    border: 10px solid #fff;
    padding: 10px;
`

const IndexPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
                file(relativePath: { eq: "images/ann-cathrin.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 540, maxHeight: 540, cropFocus: NORTH) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout>
            <Grid>
                <div>
                    <h1>{data.site.siteMetadata.title}</h1>
                    <StyledImg fluid={data.file.childImageSharp.fluid} />
                    <p className="u-size-large">
                        I&#39;m an experienced Front-end Developer having worked at a variety of digital and marketing agencies for over 7 years. With strong skills in writing <strong>HTML</strong>
                        ,&nbsp;
                        <strong>CSS</strong> using <strong>Sass</strong> and <strong>JavaScript</strong>.
                    </p>
                    <p>I&#39;m passionate about continually improving the workflow using task runners such as grunt, gulp and npm scripts.</p>
                    <p>
                        I&#39;m especially eager to make code modular, maintainable and semantic as web standards progress, paying extra attention to decreasing load times and making sites more
                        accessible and user friendly.
                    </p>
                    <p>
                        I love a good challenge or tackling a strange bug and I&#39;m currently working for{' '}
                        <a href="http://rawnet.com" target="_blank" rel="noopener noreferrer">
                            Rawnet
                        </a>{' '}
                        since September 2017.
                    </p>
                </div>
                <div>
                    <h2>Some things I do...</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS ( Sass / SCSS / LESS )</li>
                        <li>JavaScript / jQuery</li>
                        <li>Grunt / Gulp / npm scripts</li>
                        <li>Responsive web development</li>
                        <li>Responsive HTML emails</li>
                        <li>Progressive enhancement</li>
                        <li>W3C Standards &amp; Accessibility</li>
                        <li>Usability &amp; UX considerations</li>
                        <li>Cross browser compatibility</li>
                        <li>Version control ( Git / BitBucket )</li>
                        <li>Adobe Suite ( Illustrator &amp; Photoshop )</li>
                    </ul>
                </div>
            </Grid>
        </Layout>
    )
}

export default IndexPage
