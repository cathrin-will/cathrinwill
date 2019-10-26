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
            <p className="u-size-large">
                I&#39;m an experienced Front-end Developer having worked at a variety of digital and marketing agencies for over 7 years. With strong skills in writing <strong>HTML</strong>,&nbsp;
                <strong>CSS</strong> using <strong>Sass</strong> and <strong>javaScript</strong>.
            </p>
            <p>I&#39;m passionate about continually improving the workflow using task runners such as grunt, gulp and npm scripts.</p>

            <p>
                I&#39;m especially eager to make code more modular, maintainable and semantic as web standards progress, paying extra attention to decreasing load times and making sites more
                accessible and user friendly.
            </p>

            <p>I love a good challenge or tackling a strange bug and I&#39;m currently working for Rawnet since September 2017.</p>
        </Layout>
    )
}

export default IndexPage
