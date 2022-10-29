import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/category");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Why donate blood</span>
        <img
          className="sidebarImg"
          src="https://st2.depositphotos.com/1017986/8169/i/450/depositphotos_81693086-stock-photo-female-hands-holding-red-heart.jpg"
          alt=""
        />
        <p>
        The act of helping others, donating to charity, or volunteering your time, will give you an improved sense of wellbeing. The knowledge that you've sacrificed time and/or money in order to help others in need or create positive change in the world is a beautiful thing.
        </p>
      </div>
      <div className="sidebarItem">
        
        <ul className="sidebarList">
          {cats.map((ele,ind) => (
            <Link key={ind} to={`/?cat=${ele.name}`}>
              <li  className="sidebarListItem">{ele.name}</li>
            </Link>
          ))}
        </ul>
      </div>
     
    </div>
  );
}
