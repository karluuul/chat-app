import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Chat from './pages/chat/Chat.jsx'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App
