import React from 'react'
import { Link } from 'gatsby'
import { Redirect } from '@reach/router'
import { AuthCheck } from 'reactfire'

import SEO from './SEO'
import Records from './Records'

const Page2 = () => {
  return (
    <AuthCheck fallback={<Redirect to="/login" noThrow />}>
      <SEO title="Page two" />

      <h1>Hi from the second page</h1>
      <Records />
      <Link to="/">Go back to the homepage</Link>
    </AuthCheck>
  )
}

export default Page2
