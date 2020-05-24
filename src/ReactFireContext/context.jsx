import React from 'react'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'

import { fireConfig } from './fireConfig'

export const wrapRootElement = ({ element }) => {
  if (typeof window === 'undefined') return <p>Loading...</p>
  return (
    <FirebaseAppProvider firebaseConfig={fireConfig}>
      <SuspenseWithPerf fallback={<p>loading...</p>}>
        {element}
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  )
}
