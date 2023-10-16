import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '../images/svg/twitter.svg'
import GithubIcon from '../images/svg/github.svg'
import LinkedinIcon from '../images/svg/linkedin.svg'

const SocialList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
`
const SocialItem = styled.li`
    margin-bottom: 0;
    &:not(:last-child) {
        margin-right: 1rem;
    }
`

const ExternalLink = styled.a`
    border: 1px solid #fff;
    display: block;
    padding: 5px;
    width: 30px;

    svg {
        display: block;
        fill: #fff;
        height: auto;
        max-width: 100%;
        transition: fill 0.3s;
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
