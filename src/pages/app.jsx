import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import Page2 from '../components/Page2Content'

export default function app() {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute component={Page2} path="/page-2/" />
      </Router>
    </Layout>
  )
}
