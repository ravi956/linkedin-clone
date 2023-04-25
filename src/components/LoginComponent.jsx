import React, { useState } from "react";
import { loginAPI, registerAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await loginAPI(credentials);
      console.log(res);
      console.log(import.meta.env.VITE_SECRET_KEY);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper">
      <h1>Login Component</h1>
      <div className="auth-inputs">
        <input
          onChange={(event) => {
            setCredentials({ ...credentials, email: event.target.value });
          }}
          className="common-input"
          placeholder="Enter your Email"
        />
        <input
          onChange={(event) => {
            setCredentials({ ...credentials, password: event.target.value });
          }}
          className="common-input"
          placeholder="Enter your Password"
        />
      </div>
      <button className="login-btn" onClick={login}>
        Log In to LinkedIn
      </button>
    </div>
  );
};

export default LoginComponent;
