import React, { useState } from 'react'
import {db} from "../Firebase"
import firebase from "firebase/compat/app";


const SendMessage = () => {
  const [message, setMessage] = useState()
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='sendMsg'>
          <input  placeholder='メッセージを入力してください' onChange={handleChange}/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
