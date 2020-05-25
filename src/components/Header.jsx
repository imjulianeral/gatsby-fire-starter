import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './Image'

import './buttons.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      boxShadow: '0px 5px 15px #888888',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ maxWidth: `100px`, flex: '1 1 auto', marginRight: '1rem' }}>
        <Link to="/">
          <Image />
        </Link>
      </div>
      <h1 style={{ margin: 0, flex: '1 1 auto' }}>
        <Link
          to="/"
          style={{
            color: `rebeccapurple`,
            textDecoration: `none`,
          }}
        >
          {siteTitle.split('', 6)}
          <span style={{ color: '#FF7700' }}>{siteTitle.split('y')[1]}</span>
        </Link>
      </h1>
      <div>
        <Link to="/login" style={{ marginRight: '1rem' }}>
          <button className="btn-1">Login</button>
        </Link>
        <Link to="/app/page-2/">
          <button className="btn-1">PrivatePage</button>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
