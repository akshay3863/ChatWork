import React from "react";
import "./login.css";
import LoginImg from "../../assets/login.svg";
import LogoImg from "../../assets/Logo.svg";
import EyeImg from "../../assets/eye.svg";
import GoogleImg from "../../assets/google.svg";
import FbImg from "../../assets/fb.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
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
          <h1>Welcome</h1>
          <input placeholder="email" className="common-input CF18" />
          <div className="relative-input-container">
            <input
              placeholder="password"
              type="password"
              className="common-input CF18"
            />
            <img alt="EyeImg" src={EyeImg} />
          </div>
          <div className="forgot-div">
            <div>
              <input type="checkbox" />
              <span className="CF18">Remember me</span>
            </div>
            <div>
              <span>Forgot Password?</span>
            </div>
          </div>
          <button
            className="common-button CF18"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Login
          </button>
          <div className="dividers-line CF15">
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
          <div
            className="bottom-reg-container"
            style={{ marginBottom: "40px" }}
          >
            Don’t have an account? <span>Register</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
