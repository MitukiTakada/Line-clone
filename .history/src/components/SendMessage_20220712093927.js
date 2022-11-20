import React, { useState } from 'react'

const SendMessage = () => {
  const [message, setMessage] = useState()
  const handlechange = () => {
    
  }
  return (
    <div>
      <form>
        <div className='sendMsg'>
          <input  placeholder='メッセージを入力してください' onChange={handleChange}/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
