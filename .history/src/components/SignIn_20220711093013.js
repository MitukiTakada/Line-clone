import { Button } from '@material-ui/core'
import React from 'react'
import firebase from "firebase/compat/app";

const SignIn = () => {
  const signWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
  }
  return (
    <div>
      <Button onClick={signWithGoogle}>Googleでログインする</Button>
    </div>
  )
}

export default SignIn
