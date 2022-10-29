import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import logo from "./logo/Blood Finder.png";

function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout=()=>{
    dispatch({type: "LOGOUT"});
  }

  return (
    <div className="top">
      <div className="topLeft">
        <Link to='/'><img className="logo" src={logo} alt="" /></Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to='/'>Home</Link>
          </li>
          <li className="topListItem"><Link className="link" to='/Bloodrqst'>Request</Link></li>
          <li className="topListItem extra"><Link className="link" to='/whywe'>Why donate</Link></li>
          <li className="topListItem "><Link className="link" to='/hospital'>Hospital</Link></li>
          <li className="topListItem extra"><Link className="link" to='/help'>Help line</Link></li>
          <li className="topListItem"><Link className="link" to='/about'>About</Link></li>
          <li className="topListItem"><Link className="link" to='/contact'>Contact</Link></li>
          <li className="logout" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user? (
            <Link to="/settings" className="link">
            <img
            className="topImg"
            src={PF + user.profilePic}
            alt=""
          />
          </Link>
          ): <ul className="topList">
            <li className="topListItem">
            <Link className="link" to='/login'>LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to='/register'>Register</Link>
            </li>
              
              
            </ul>
        }
        
       
      </div>
    </div>
  );
}
export default Topbar;
