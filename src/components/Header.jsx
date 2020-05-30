import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import Button from './Button'

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
          <Button text="Login" className="login-btn" />
        </Link>
        <Link to="/app/page-2/">
          <Button text="Private Page" className="btn-1" />
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
