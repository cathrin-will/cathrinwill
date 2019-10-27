/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Ann-Cathrin Will | Front-end Developer',
        url: 'cathrinwill.com',
        titleTemplate: '%s | Ann-Cathrin Will',
        description: 'Ann-Cathrin Will is an experienced Front-end Developer with strong skills in writing HTML and CSS javaScript',
        author: '@cathrinwill',
        image: '/images/ann-cathrin.jpg',
        twitterUsername: '@cathrinwill'
    },
    plugins: [
        'gatsby-transformer-remark',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {}
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: `${__dirname}/src/images/svg/`
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/work`,
                name: 'work'
            }
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaultQuality: 100
            }
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ]
}
