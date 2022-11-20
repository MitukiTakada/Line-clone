import React, { useState } from 'react'
import {db, auth} from "../Firebase"
import firebase from "firebase/compat/app";


const SendMessage = () => {
  const [message, setMessage] = useState()
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMessage("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='sendMsg'>
          <Input
          placeholder='メッセージを入力してください' 
          onChange={handleChange} 
          value={message}/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
