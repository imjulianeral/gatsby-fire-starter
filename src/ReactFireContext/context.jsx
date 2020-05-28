import React, { Suspense } from 'react'
import { FirebaseAppProvider } from 'reactfire'

import { fireConfig } from './fireConfig'

export const wrapRootElement = ({ element }) => {
  if (typeof window === 'undefined') return <p>Loading...</p>
  return (
    <FirebaseAppProvider firebaseConfig={fireConfig}>
      <Suspense fallback={<p>loading...</p>}>{element}</Suspense>
    </FirebaseAppProvider>
  )
}
