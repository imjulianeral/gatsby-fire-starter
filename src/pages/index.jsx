import React from 'react'

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
  </Layout>
)

export default IndexPage
