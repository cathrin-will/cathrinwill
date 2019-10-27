import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '../images/svg/twitter.svg'
import GithubIcon from '../images/svg/github.svg'
import LinkedinIcon from '../images/svg/linkedin.svg'

const SocialList = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
`
const SocialItem = styled.li`
    margin-right: 1rem;
    margin-bottom: 0;
`

const ExternalLink = styled.a`
    display: block;
    width: 30px;
    border: 1px solid #fff;
    padding: 5px;

    svg {
        max-width: 100%;
        fill: #fff;
        height: auto;
        transition: fill 0.3s;
        display: block;
    }

    &:hover {
        svg {
            fill: #cb4e64;
        }
    }
`

const ListLink = (props) => {
    const { href, children } = props
    return (
        <SocialItem>
            <ExternalLink href={href} rel="noopener noreferrer" target="_blank">
                {children}
            </ExternalLink>
        </SocialItem>
    )
}
const Social = () => (
    <SocialList>
        <ListLink href="https://github.com/cathrin-will">
            <GithubIcon />
        </ListLink>
        <ListLink href="https://www.linkedin.com/in/cathrinwill/">
            <LinkedinIcon />
        </ListLink>
        <ListLink href="https://twitter.com/cathrinwill">
            <TwitterIcon />
        </ListLink>
    </SocialList>
)

ListLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
}

ListLink.defaultProps = {
    href: '/',
    children: ''
}
export default Social
