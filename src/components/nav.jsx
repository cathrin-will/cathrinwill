import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

const ListLink = (props) => {
    const { to, children } = props
    return (
        <NavItem>
            <NavLink to={to}>{children}</NavLink>
        </NavItem>
    )
}

const Nav = ({ activeLink }) => (
    <NavMain>
        <NavList>
            <ListLink className={activeLink} to="/">
                Home
            </ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </NavList>
    </NavMain>
)

Nav.propTypes = {
    activeLink: PropTypes.string
}

Nav.defaultProps = {
    activeLink: 'yooo'
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
