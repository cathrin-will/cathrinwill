import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ListLink = (props) => {
    const { to, children } = props
    return (
        <li style={{ display: 'inline-block', marginRight: '1rem' }}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

const MainNav = styled.nav`
    display: flex;
    justify-content: flex-end;
`
const UlNav = styled.ul`
    list-style: none;
    margin: 0;
`

const Nav = ({ activeLink }) => (
    <MainNav>
        <UlNav>
            <ListLink className={activeLink} to="/">
                Home
            </ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </UlNav>
    </MainNav>
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
