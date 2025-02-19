import React from 'react'
import './chat.css'
import LeftSideBar from '../../components/leftSidebar/LeftSideBar.jsx';
import ChatBox from '../../components/chatBox/ChatBox.jsx';
import RightSideBar from '../../components/rightSidebar/RightSideBar.jsx';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Chat