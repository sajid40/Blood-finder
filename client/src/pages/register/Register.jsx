import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [blood,setBlood] = useState("");
  const [error,setError] = useState(false)

  const handleSumbit = async(e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("http://localhost:5000/api/auth/register",{
      username,
      email,
      password,
      blood,
    })
    res.data && window.location.replace('/login');
    }
    catch(err){
      setError(true);
    }
    
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSumbit}>
      <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={e=> setUsername(e.target.value)}
        />

         <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={e=> setEmail(e.target.value)}

        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={e=> setPassword(e.target.value)}
        />
         <label>blood</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your blood group..."
          onChange={e=> setBlood(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton" type="submit">
      <Link className="link" to='/login'>Login</Link>
      </button>
      { error && <span style={{color: "red", marginTop:"10px"}}>Something Went Wrong!</span>}
      <p>If you have registered, please 
        <Link to='/login'>Log in</Link>
      </p>
    </div>
  );
}
