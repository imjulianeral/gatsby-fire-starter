import React from 'react'
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
      <br /> <br />
    </AuthCheck>
  </Layout>
)

export default IndexPage
