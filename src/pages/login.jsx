import React from 'react'
import { Link } from 'gatsby'
import { AuthCheck } from 'reactfire'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FirebaseUI from '../components/FirebaseUI'
import SignOut from '../components/SignOut'

const IndexPage = () => (
  <Layout>
    <SEO title="Login" />
    <h1>Login</h1>
    <AuthCheck fallback={<FirebaseUI />}>
      <p>You are logged in</p>
      <SignOut />
    </AuthCheck>
    <br />
    <Link to="/">Go to main page</Link>
  </Layout>
)

export default IndexPage
