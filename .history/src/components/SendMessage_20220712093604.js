import React from 'react'

const SendMessage = () => {
  const [message, setMessage]
  return (
    <div>
      <form>
        <div className='sendMsg'>
          <input  placeholder='メッセージを入力してください'/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
