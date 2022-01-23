import React from "react";
import FormBanner from "../Components/LoginandRegister/FormBanner";
import Register from "../Components/LoginandRegister/Register";
import { Link } from "react-router-dom";
import Logo from "../images/main-logo.png"

const RegisterPage = () => {
  return (
    <section
      id="loginMain"
      className="d-flex justify-content-center w-100 h-100"
    >
      <FormBanner />
      <Register />
      <Link to="/" className="loginLogo">
        <img src={Logo} alt="..." />
      </Link>
    </section>
  );
};

export default RegisterPage;
