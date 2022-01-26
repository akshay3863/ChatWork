import React from "react";
import "./Registration.css";
import LoginImg from "../../assets/regis.svg";
import LogoImg from "../../assets/Logo.svg";
import EyeImg from "../../assets/eye.svg";
import GoogleImg from "../../assets/google.svg";
import FbImg from "../../assets/fb.svg";
const index = () => {
  return (
    <div className="login-container">
      <div className="Illustration-container">
        <img alt="Illustrations" src={LoginImg} />
      </div>
      <div className="right-login-container">
        <div>
          <img alt="Illustrations" src={LogoImg} />
        </div>
        <div className="right-login-Bottom-container">
          <h1>Registration</h1>
          <input placeholder="Full name" className="common-input" />
          <input placeholder="email" className="common-input" />
          <div className="relative-input-container">
            <input
              placeholder="password"
              type="password"
              className="common-input"
            />
            <img alt="EyeImg" src={EyeImg} />
          </div>
          <div className="forgot-div">
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div>
              <span>Forgot Password?</span>
            </div>
          </div>
          <button className="common-button">Register</button>
          <div className="dividers-line">
            <span>Or Login With</span>
          </div>
          <div className="social-container">
            <div className="social-icon">
              <img alt="EyeImg" src={GoogleImg} />
            </div>
            <div className="social-icon">
              <img alt="EyeImg" src={FbImg} />
            </div>
          </div>
          <div className="bottom-reg-container">
            Don’t have an account? <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
