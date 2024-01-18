import React from "react";
import { CiHome } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
function Navbar() {
  return (
    <div className="max-container">
      <div className="navbar">
        <div className="logo-container">
          <p className="logo">
            <div className="logo-icon-container">
              <FaHome />
              <h3>MYlogo</h3>
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
          <button className="creator">Become a creator</button>

          <div className="profile-container">
            <p className="name">Aadarsh</p>
            <div className="image-container"></div>
          </div>
        </div>
        <div className="feed-container">
          <div className="feed-links">
            <ul>
              <li className="feed-link">Posts</li>
              <li className="feed-link">Overview</li>
              <li className="feed-link">Goals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
