import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <div>
      {children}
    </div>
    <footer 
      style={{
        position: `fixed`,
        bottom: 0,
        margin: 10
      }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
