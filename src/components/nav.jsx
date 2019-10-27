import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import cvPDF from '../files/AnnWillCV.pdf'

const NavMain = styled.nav`
    display: flex;
    justify-content: flex-end;
`
const NavList = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
`
const NavItem = styled.li`
    margin-right: 1rem;
`

const NavLink = styled(Link)`
    color: #fff;
    font-weight: bold;
`

const ExternalLink = styled.a`
    color: #fff;
    font-weight: bold;
`

const ListLink = (props) => {
    const { to, children } = props
    return (
        <NavItem>
            <NavLink to={to} activeStyle={{ textDecoration: 'underline' }}>
                {children}
            </NavLink>
        </NavItem>
    )
}

const Nav = () => {
    return (
        <NavMain>
            <NavList>
                <ListLink to="/">Home</ListLink>
                <NavItem>
                    <ExternalLink rel="noopener noreferrer" href={cvPDF} target="_blank">
                        Full C.V. (pdf)
                    </ExternalLink>
                </NavItem>
                <ListLink to="/work/">Past work</ListLink>
            </NavList>
        </NavMain>
    )
}

ListLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
}

ListLink.defaultProps = {
    to: '/',
    children: ''
}
export default Nav
