import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blood finder</span>
      </div>
      <div>
      <img
        className="headerImg"
        src="http://c.files.bbci.co.uk/182FF/production/_107317099_blooddonor976.jpg"
        alt=""
      />
      </div>
      <div className="butn">
         <Link className="buttons" to='/Bloodrqst'>Blood Request</Link>
         
      </div>


    </div>
  );
}

export default Header;
