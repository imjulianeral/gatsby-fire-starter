import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
        margin: '0 auto',
      }}
    >
      <Image />
    </div>
    <Link to="/app/page-2/">Go to page 2</Link>
    <br />
    <Link to="/login">Go to Login</Link>
  </Layout>
)

export default IndexPage
