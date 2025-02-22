import React from 'react'
import './leftsidebar.css'
import assets from '../../assets/assets.js'
import { useNavigate } from 'react-router-dom'


const LeftSideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="left-side">
      <div className="left-side-top">
        <div className="left-side-nav">
          <img src={assets.logo} alt="logo" className='logo'/>
          <div className="menu">
            <img src={assets.menu_icon} alt="menu_icon" />
            <div className="sub-menu">
              <p onClick={()=>navigate("/profile")}>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="left-side-search">
          <img src={assets.search_icon} alt="search-icon" />
          <input type="text" placeholder='Search here...' />
        </div>
      </div>
      <div className="left-side-list">
        {Array(12).fill("").map((item,index) =>(
          <div key={index} className="friends">
          <img src={assets.profile_img} alt="profile_img" />
          <div>
            <p>Richard Sanford</p>
            <span>Hello World</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar