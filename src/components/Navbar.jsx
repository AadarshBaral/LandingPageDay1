import React from "react";
import { CiHome } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className="max-container">
      <div className="navbar">
        <div className="logo-container">
          <p className="logo">
            <div className="logo-icon-container">
              <FaHome />
              <h3>MyContent</h3>
            </div>
          </p>
          <div className="searchbar">
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Find authors"
                className="search"
              />
              <button className="search-btn">
                <FaSearch className="search-logo" />
              </button>
            </div>
          </div>
        </div>
        <div className="links-container">
          <button className="creator button-primary">Become a creator</button>
          
          
            <div className="notification-container">
            <div className="red-dot"></div>
                <IoMdNotificationsOutline className="notification" /></div>
          <div className="profile-container">
            <p className="name">Aadarsh</p>
            <div className="image-container"></div>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default Navbar;
