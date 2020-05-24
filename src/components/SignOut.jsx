import React from 'react'
import { useAuth } from 'reactfire'

export default function SignOut() {
  const auth = useAuth()

  const signOut = async () => {
    await auth.signOut()
  }
  return <button onClick={signOut}>Sign Out</button>
}
