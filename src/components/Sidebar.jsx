import React from 'react'
import { CiHome } from "react-icons/ci";
import { FaCompass } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
  return (
    <>
    <div className="max-width-container">
    <div className="sidebar-container">

      <ul className="head-items">
        <li className="head-item active">
        <CiHome className='side-icon ' />
          Feed</li>
        <li className="head-item">
        <FaCompass className='side-icon'/>
          Explore</li>
        <li className="head-item">
        <IoIosChatbubbles className='side-icon' />
          Message</li>
        <li className="head-item">
        <CiSettings className='side-icon'/>
          Settings</li>
      </ul>
      <div className="following">
      <h3 className='following-header'>Following</h3>
    
      <ul className="following-items">
      <div className="follower-image-container active">
          <div className="sidebar-image-container"></div>
          <div> <p className="name">Newt Schmander</p></div>
         
          
        </div>
      <div className="follower-image-container">
          <div className="sidebar-image-container"></div>
          <div> <p className="name">Sherlock Holmes</p></div>
          
        </div>
      <div className="follower-image-container">
          <div className="sidebar-image-container"></div>
          <div> <p className="name">Alexander James</p></div>
          
        </div>
      <div className="follower-image-container">
          <div className="sidebar-image-container"></div>
          <div> <p className="name">Harry Potter</p></div>
          
        </div>
      
      </ul>
      </div>
    </div>
    </div>
    </>
  )
}
