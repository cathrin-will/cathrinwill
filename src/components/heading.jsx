import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Heading = ({ siteTitle }) => <Link to="/">{siteTitle}</Link>

Heading.propTypes = {
    siteTitle: PropTypes.string
}

Heading.defaultProps = {
    siteTitle: 'yooo'
}

export default Heading
