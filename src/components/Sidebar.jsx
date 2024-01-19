import React from "react";
import { CiHome } from "react-icons/ci";
import { FaCompass } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import PersonDetail from "./PersonDetail";
export default function Sidebar() {
  let persons = [
    {
      pname: "Newt Schmander",
      image:
        "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    },
    {
      pname: "James Bond",
      image:
        "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    },
    {
      pname: "Harry Potter",
      image:
        "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    },
    {
      pname: "John Wick",
      image:
        "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
    },
  ];

  return (
    <>
      <div className="max-width-container">
        <div className="sidebar-container">
          <ul className="head-items">
            <li className="head-item active">
             <CiHome className="side-icon " />
          <Link to = '/'>Feed</Link>
  
            </li>
            <li className="head-item">
              <FaCompass className="side-icon" />
              <Link to = "/explore">Explore</Link>
      
            </li>
            <li className="head-item">
              <IoIosChatbubbles className="side-icon" />
              <Link to = "/messaging">     Message</Link>
         
            </li>
            <li className="head-item">
              <CiSettings className="side-icon" />
              <Link to="/settings">  Settings</Link>
            
            </li>
          </ul>
          <disv className="following">
            <h3 className="following-header">Following</h3>

            <ul className="following-items">
            
              {persons.map((item) => (
             
                <PersonDetail props={item} />
              ))}
            </ul>
          </disv>
        </div>
      </div>
    </>
  );
}
