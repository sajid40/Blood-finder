import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [bloodUnit, setBloodUnit] = useState("");
  const [patientName, setPatientName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      patientAge,
      patientName,
      bloodGroup,
      bloodUnit,
      purpose,
      mobileNumber,
      hospitalName,
      address
      
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/post", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          </div>
        </div>

        <div className="writeFormGroup">
          <input
            placeholder="Parpose"
            type="text"
            className="writeInput"
            onChange={e=>setPurpose(e.target.value)}
          />
        

        <input
            type="text"
            placeholder="Blood Unit/ Bag"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setBloodUnit(e.target.value)}
          />
          <input
            type="text"
            placeholder="Patient Name"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setPatientName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Facebook ID Link"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setPatientAge(e.target.value)}
          />
           <input
            type="text"
            placeholder="Blood group"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setBloodGroup(e.target.value)}
          />
           <input
            type="text"
            placeholder="Mobile number"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setMobileNumber(e.target.value)}
          />
           <input
            type="text"
            placeholder="Hospital Name"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setHospitalName(e.target.value)}
          />
           <input
            type="text"
            placeholder="Address"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setAddress(e.target.value)}
          />
          
          
          </div>



        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
