import React from 'react'
// import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1%;
    padding-bottom: 40px;

    @media (min-width: 1024px) {
        grid-gap: 5%;
        grid-template-columns: 70% 25%;
    }
`
const StyledImg = styled(Img)`
    border-radius: 50%;
    shape-outside: circle(50%);
    float: none;
    width: 100%;
    max-width: 300px;
    height: auto;
    border: 10px solid #fff;
    @media (min-width: 600px) {
        float: right;
    }
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
                    I'm an experienced Front-end Developer, I've worked at a variety of digital and marketing agencies for over 11~ years, and I started my career in 2007. I spent 4 years getting a Computer Maths Foundation degree and a Web development with Business BSc (Hons) degree.
                </p>
                <p>
                    I have strong core skills in writing semantic, accessibility friendly <strong>HTML</strong>. Modular and modern <strong>CSS</strong> using <strong>SCSS</strong>. Over the years I have experienced a few flavours of <strong>JavaScript</strong>, my favourite being vanilla and react.
                </p>
                    <p>I'm as passionate about continually improving the Developer Experience using task runners such as gulp, vite and npm scripts, as I am improving the user experience of the sites we build. </p>
                    <p> Of course I'm always hoping to build the fastest sites I can and getting 4 of those 100% scores on Lighthouse ( <a href="https://pagespeed.web.dev/analysis/http-cathrinwill-com" target="_blank" rel="noopener noreferrer">Google PageSpeed Insights</a>)  is what truly brings me joy. Unfortunately I have a day job so I can't say that about this portfolio site currently 🙈, please look away thanks.
                    </p>
                    <p>
                        Finally, I love a good challenge or tackling a strange bug and I&#39;m currently working for{' '}
                        <a href="http://rawnet.com" target="_blank" rel="noopener noreferrer">
                            Rawnet
                        </a>{' '}
                        since September 2017.
                    </p>
                    <p>I've been a manager since June 2020, and have seen enough CVs to know never to claim <em>I have great attention to detail</em>. That's not to say I don't enjoy trying to beat the QA team and get the much sought after all clear. </p>
                </div>
                <div>
                    <h2>Some skills I have experience with..</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS ( Sass / SCSS / Grid Layout )</li>
                        <li>JavaScript ( Vanilla / React.js / Next.js / TypeScript)</li>
                        <li> Gulp / vite / npm scripts</li>
                        <li>Responsive web development (♥ <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/container" target="_blank" rel="noopener noreferrer">@containers</a>) </li>
                        <li>Responsive HTML emails</li>
                        <li>Progressive enhancement</li>
                        <li>W3C Standards &amp; Accessibility (a11y)</li>
                        <li>Usability &amp; UX considerations</li>
                        <li>Cross browser compatibility</li>
                        <li>Version control ( Git )</li>
                    </ul>
                </div>
            </Grid>
        </Layout>
    )
}

export default IndexPage
