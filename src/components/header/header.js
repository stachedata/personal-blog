import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.background}>
    <div className={styles.siteTitle}>
      <h2>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h2>

      <h3>
        <Link to="/page-2" className={styles.link}>
          Page 2
        </Link>
      </h3>
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
