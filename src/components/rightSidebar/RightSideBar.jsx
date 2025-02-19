import React from "react";
import "./rightsidebar.css";
import assets from "../../assets/assets";

const RightSideBar = () => {
  return (
    <div className="right-side">
      <div className="right-side-profile">
        <img src={assets.profile_img} alt="" className="" />
        <h3>
          Richard Sanford <img src={assets.green_dot} alt="" className="dot" />
        </h3>
        <p>Bio text goes here.</p>
      </div>

      <hr />
      <div className="right-side-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="media-img" />
          <img src={assets.pic2} alt="media-img" />
          <img src={assets.pic3} alt="media-img" />
          <img src={assets.pic4} alt="media-img" />
          <img src={assets.pic1} alt="media-img" />
          <img src={assets.pic2} alt="media-img" />
        </div>
      </div>

      <button>Logout</button>
    </div>
  );
};

export default RightSideBar;
