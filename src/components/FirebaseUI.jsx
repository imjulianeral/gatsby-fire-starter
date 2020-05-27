import React, { memo } from 'react'
import FirebaseUIAuth from 'react-firebaseui-localized'
import { useAuth, useFirebaseApp } from 'reactfire'

const FirebaseUI = memo(() => {
  const { firebase_ } = useFirebaseApp()
  const auth = useAuth
  return (
    <FirebaseUIAuth
      lang="es_419"
      config={{
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Email as auth providers.
        signInOptions: [
          auth.GoogleAuthProvider.PROVIDER_ID,
          auth.EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/app/page-2',
      }}
      auth={auth()}
      firebase={firebase_}
    />
  )
})

export default FirebaseUI
