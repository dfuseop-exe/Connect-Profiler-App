import React from 'react'
import "../Css/Login.css";
import signup from "../Images/signup.svg";


export default function Login() {
    return (
        <div class="contact-wrapper">
        <div class="left_side">
          <img src={signup}/>
        </div>
        <div class="right_side">
          <h2>Account Login</h2>
          <form>
            <div class="form-row">
              <input type="text" required/>
              <span>Username or Email</span>
            </div>
            <div class="form-row">
              <input type="password" required/>
              <span>Password</span>
            </div>
            <div class="form-row"></div>
            <div class="form-row"> 
              <button type="submit">Login to your Account</button>
            </div>
          </form>
          
        </div>
      </div>
    )
}
