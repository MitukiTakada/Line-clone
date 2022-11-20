import React, { useState } from 'react'
import {db, auth} from "../Firebase"
import firebase from "firebase/compat/app";
import { Input } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';



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
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginb
          }}
          placeholder='メッセージを入力してください' 
          onChange={handleChange} 
          value={message}/>
        </div>
        <SendIcon />
      </form>
    </div>
  )
}

export default SendMessage
