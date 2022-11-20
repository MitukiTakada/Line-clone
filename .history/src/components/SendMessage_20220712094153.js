import React, { useState } from 'react'

const SendMessage = () => {
  const [message, setMessage] = useState()
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    
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
