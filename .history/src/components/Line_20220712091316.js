import React from 'react'
import SignOut from './SignOut'
import {db} from "../Firebase"

function Line() {
  const [messages ,setMessage] = usestate()
  return (
    <div>
      <SignOut />
    </div>
  )
}

export default Line
