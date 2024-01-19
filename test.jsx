import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { FaCompass } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import PersonDetail from './PersonDetail';
import "../App.css";

export default function Sidebar() {
 let persons = [
  {
    pname : "Newt Schmander",
    image : "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
  },
  {
    pname : "James Bond",
    image : "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
  },
  {
    pname : "Harry Potter",
    image : "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
  },
  {
    pname : "John Wick",
    image : "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
  },


 ]
 


 


  return (
    <>
    <div classpname="max-width-container">
    <div classpname="sidebar-container">

      <ul classpname="head-items">
        <li classpname="head-item active">
        <CiHome classpname='side-icon ' />
          Feed</li>
        <li classpname="head-item">
        <FaCompass classpname='side-icon'/>
          Explore</li>
        <li classpname="head-item">
        <IoIosChatbubbles classpname='side-icon' />
          Message</li>
        <li classpname="head-item">
        <CiSettings classpname='side-icon'/>
          Settings</li>
      </ul>
      <div classpname="following">
      <h3 classpname='following-header'>Following</h3>
    
      <ul classpname="following-items">
     



    {persons.map((item) =>
      <PersonDetail props ={item}/>
    
    )}

     
     
      </ul>
      </div>
    </div>
    </div>
    </>
  )
}
