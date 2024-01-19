import React from "react";
import { Link } from "react-router-dom";
export default function PersonDetail({ props }) {
  console.log(props);
  return (
    <div className="follower-image-container ">
      <div className="sidebar-image-container"></div>
      <div>
        {" "}
        <Link to = "/" >
        <p className="name">{props.pname}</p>
        </Link>
      </div>
    </div>
  );
}
