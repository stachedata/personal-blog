import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `25px`
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      {/* This is DRY and will need to be updated.
      <h2>
        <Link
          to="/page-2"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `25px`
          }}
        >
          Slug needed here
        </Link>
      </h2> */}

    </div>
  </div>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
