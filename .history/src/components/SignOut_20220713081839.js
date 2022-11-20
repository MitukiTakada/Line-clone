import { Button } from '@material-ui/core';
import {auth} from "../Firebase";
import React from 'react';

const SignOut = () => {
  return (
    <div className='header'>
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  )
}

export default SignOut
