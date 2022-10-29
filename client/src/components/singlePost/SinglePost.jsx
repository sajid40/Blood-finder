import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodUnit, setBloodUnit] = useState("");
  const [purpose, setPurpose] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async (e) => {
    try {
      await axios.delete(`http://localhost:5000/api/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async (e) => {
    try {
      await axios.put(`http://localhost:5000/api/post/${post._id}`, {
        username: user.username,
        title,
        patientName,
        patientAge,
        bloodGroup,
        bloodUnit,
        purpose,
        mobileNumber,
        hospitalName,
        address,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  // console.log(path);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setPatientAge(res.data.patientAge);
      setPatientName(res.data.patientName);
      setBloodGroup(res.data.bloodGroup);
      setBloodUnit(res.data.bloodUnit);
      setPurpose(res.data.purpose);
      setMobileNumber(res.data.mobileNumber);
      setHospitalName(res.data.hospitalName);
      setAddress(res.data.address);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Purpose:     {purpose}</p>
        )}

{updateMode ? (
          <input
            className="singlePostDescInput"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Patient-Name:     {patientName}</p>
        )}
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Facebook-Link:    <a href={patientAge} target="blank">Click here</a></p>
        )}

        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Blood-Gourp:     {bloodGroup}</p>
        )}
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={bloodUnit}
            onChange={(e) => setBloodUnit(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Blood-Unit: {bloodUnit}</p>
        )}
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Mobile-Number:{mobileNumber}</p>
        )}
        {updateMode ? (
          <input
            className="singlePostDescInput"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Hospital-Name:{hospitalName}</p>
        )}
        {updateMode ? (
          
          <input
            className="singlePostDescInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Address:      {address}</p>
        )}

        
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
