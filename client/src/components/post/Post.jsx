import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, inx) => (
            <span key={inx} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <span className="PostTitle">
          <Link className="link" to={`post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">Purpose: {post.purpose}</p>
      <p className="postDesc">Blood-Group: {post.bloodGroup}</p>
      <p className="postDesc">Patient-Name: {post.patientName}</p>
      <p className="postDesc">BloodUnit: {post.bloodUnit}</p>
      <p className="postDesc">MobileNumber: {post.mobileNumber}</p>
      <p className="postDesc">Hospital-Name: {post.hospitalName}</p>
      <p className="postDesc">Address: {post.address}</p>
    </div>
  );
}

export default Post;
