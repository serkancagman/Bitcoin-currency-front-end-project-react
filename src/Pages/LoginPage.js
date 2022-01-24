import React from "react";
import { Link } from "react-router-dom";
import FormBanner from "../Components/LoginandRegister/FormBanner";
import Login from "../Components/LoginandRegister/Login";
import Logo from "../images/main-logo.png"

const LoginPage = () => {
  return (
    <section
      id="loginMain"
      className="position-relative justify-content-center w-100 h-100"
    >
      <FormBanner />
      <Login />
      <Link to="/" className="loginLogo">
        <img src={Logo} alt="..." />
      </Link>
    </section>
  );
};

export default LoginPage;
