import React from 'react'
import './chatbox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>

      <div className="chat-user">
        <img src={assets.profile_img} alt="profile_img" />
        <p>Richard Sanford <img src={assets.green_dot} alt="dot" className='dot'  /></p>
        <img src={assets.help_icon} alt="help-icon" />
      </div>

      <div className="chat-msg">

        <div className="s-msg">
          <p className="msg">Lorem Ipsum is palceholder commonly used in....</p>
          <div>
            <img src={assets.profile_img} alt="profile img" />
            <p>8:14 PM</p>
          </div>
        </div>

        <div className="s-msg">
          <img src={assets.pic1} alt="" className='msg-img'/>
          <div>
            <img src={assets.profile_img} alt="profile img" />
            <p>8:14 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem Ipsum is palceholder commonly used in....</p>
          <div>
            <img src={assets.profile_img} alt="profile img" />
            <p>8:14 PM</p>
          </div>
        </div>

      </div>


      <div className="chat-input">
        <input type="text" placeholder='Type a message' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="gallery_icon" />
        </label>
        <img src={assets.send_button} alt="send button" />
      </div>

    </div>
  )
}

export default ChatBox