import React from 'react'
import { useAuth } from 'reactfire'
import Button from './Button'

export default function SignOut() {
  const auth = useAuth()

  const signOut = async () => {
    await auth.signOut()
  }
  return <Button onClick={signOut} text="Sign Out" className="logout-btn" />
}
