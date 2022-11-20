import { Button } from '@material-ui/core';
import {auth} from "../Firebase";
import React from 'react';

const SignOut = () => {
  return (
    <div className='header'>
      <Button style={{color: "white", fontSize: "15px"}} onClick={() => auth.signOut()}>サインアウト</Button>
      <h3>{auth.currentUser</h3>
    </div>
  )
}

export default SignOut
