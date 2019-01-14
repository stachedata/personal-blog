import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.background}>
    <div className={styles.siteTitle}>
      <h1>
        <Link to="/" className={styles.link}>
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
