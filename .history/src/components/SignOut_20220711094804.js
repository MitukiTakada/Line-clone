import { Button } from '@material-ui/core'
import {auth} from
import React from 'react'

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.SignOut}>サインアウト</Button>
    </div>
  )
}

export default SignOut
