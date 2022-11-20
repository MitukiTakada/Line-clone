import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import {db} from "../Firebase"

function Line() {
  const [messages ,setMessage] = useState();
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot()
  }, [])
  return (
    <div>
      <SignOut />
    </div>
  )
}

export default Line
