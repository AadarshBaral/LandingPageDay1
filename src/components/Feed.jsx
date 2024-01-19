import React from "react";
import { FaLock, FaTwitch, FaTwitter } from "react-icons/fa";
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
      <div className="feed-container">
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
                <li className="follow-title">
                  {" "}
                  <FaCheck /> Following
                </li>
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
                  <li className="followers-count">3062</li>
                  <li className="sub-title ">Subscribers</li>
                </ul>
              </div>
            </div>
            <div className="feed-container"></div>
          </div>
        </div>
        <ul className="feed-links">
          <li className="feed-link feed-active">Posts</li>
          <li className="feed-link">Overview</li>
          <li className="feed-link">Goals</li>
        </ul>

        {/* can be a component */}
        <div className="posts-container">
          <div className="post">
            <div className="header-section">
              <div className="head-text">
                <p>Single from my first studio album</p>
              </div>
              <p>12 Jul, 6:30pm</p>
            </div>
            <div className="sub-text">
              {" "}
              <p>Be the first to hear my song from my new stuido album</p>
            </div>
            <div className="image"></div>
            <div className="paywall">
              <div className="lock-container">
                <div >
                  <FaLock className="lock-icon" />
                </div>
                <p>Unlock this post</p>
              </div>
    <div className="button-container">
    <button className="button-primary">
                Superlistener for $12/month
              </button>
              <button className="button-secondary">Buy for $4</button>
    </div>
              
            </div>
          </div>
          <div className="post">
            <div className="header-section">
              <div className="head-text">
                <p>Single from my first studio album</p>
              </div>
              <p>12 Jul, 6:30pm</p>
            </div>
            <div className="sub-text">
              {" "}
              <p>Be the first to hear my song from my new stuido album</p>
            </div>
            <div className="image"></div>
            <div className="paywall">
              <div className="lock-container">
                <div >
                  <FaLock className="lock-icon" />
                </div>
                <p>Unlock this post</p>
              </div>
    <div className="button-container">
    <button className="button-primary">
                Superlistener for $12/month
              </button>
              <button className="button-secondary">Buy for $4</button>
    </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
