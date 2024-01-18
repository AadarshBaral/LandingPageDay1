import React from "react";
import { FaTwitch, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMessage, FaRegMessage, FaXTwitter } from "react-icons/fa6";
import { HiMiniInbox } from "react-icons/hi2";
import { SlUserFollowing } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
export default function Feed() {
  return (
    <>
      <div className="feed_continer">
        <div className="banner-container">
          {/* flex container */}
          <div className="image-container">
            {/* image */}
            {/* flex item */}
          </div>

          <div className="image-detail-container">
            {/* flex item */}
            <ul className="social-links">
              <div className="left">
                <li className="social-link">
                  <FaLinkedin className="banner-social-link" />
                </li>
                <li className="social-link">
                  <FaFacebook className="banner-social-link" />
                </li>
                <li className="social-link">
                  <FaTwitch className="banner-social-link" />
                </li>
              </div>
              <div className="right">
                <li className="follow-title"> <FaCheck /> Following</li>
                <li className="social-link">
                  <HiMiniInbox className="banner-social-link" />
                </li>
              </div>
            </ul>
            <div className="image-detail">
              <div className="details">
                <div className="image"></div>
                <ul>
                  <li className="name-title">Alexander James</li>
                  <li className="sub-title">Musician 🎹</li>
                  <li className="followers-count">3000</li>
                  <li className="sub-title ">Subscribers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
