import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import {db} from "../Firebase"

function Line() {
  const [messages ,setMessage] = useState();
  useEffect(() => {
    db.collection
  }, [])
  return (
    <div>
      <SignOut />
    </div>
  )
}

export default Line
