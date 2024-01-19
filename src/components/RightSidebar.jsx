import React from "react";
import { CiHome } from "react-icons/ci";
import { FaCompass } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdHeadsetMic } from "react-icons/md";
import { IoIosMicrophone } from "react-icons/io";
export default function Sidebar() {
  return (
    <>
      <div className="max-width-container">
        <div className=" tier-container">
          <p className="subsc" >Subscription Tiers</p>
          <div className="tier-1 tier">
            <div className="tier-image">
              <div className="tier-text">
                <p className="text"> Basic listener</p>
                <p className="sub-text"> $3/month</p>
              </div>
              <div ><CiMicrophoneOn className="tier-svg"/></div>
            </div>
            <div className="tier-details">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum.</p>
            </div>
            <div className="tier-button ">Subscribed</div>
          </div>
          <div className="tier-2 tier">
            <div className="tier-image">
              <div className="tier-text">
                <p className="text">  VIP listener</p>
                <p className="sub-text"> $3/month</p>
              </div>
              <div ><IoIosMicrophone className="tier-svg"/></div>
            </div>
            <div className="tier-details">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum.</p>
            </div>
            <div className="unsubscribed-button">Subscribe</div>
          </div>
          <div className="tier-3 tier">
            <div className="tier-image">
              <div className="tier-text">
                <p className="text">super listener</p>
                <p className="sub-text"> $3/month</p>
              </div>
              <div ><MdHeadsetMic  className="tier-svg"/></div>
            </div>
            <div className="tier-details">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum.</p>
            </div>
            <div className="unsubscribed-button">Subscribe</div>
          </div>
        
         
        </div>
      </div>
    </>
  );
}
