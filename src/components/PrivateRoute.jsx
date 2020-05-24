import React from 'react'
import { AuthCheck } from 'reactfire'
import { Redirect } from '@reach/router'

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  return (
    <AuthCheck fallback={<Redirect to="/login" noThrow />}>
      <Component {...rest} />
    </AuthCheck>
  )
}
