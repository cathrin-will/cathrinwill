import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.header`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

const HeaderC = ({ siteTitle }) => (
    <MainHeader>
        <div>
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
        </div>
    </MainHeader>
)

HeaderC.propTypes = {
    siteTitle: PropTypes.string
}

HeaderC.defaultProps = {
    siteTitle: 'yooo'
}

export default HeaderC
