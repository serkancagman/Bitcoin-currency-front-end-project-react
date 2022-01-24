import React from "react";
import { Link } from "react-router-dom";
import "./style/loginandregister.css";
import { useFormik } from "formik";
import validationSchema from "./Validation/LoginValidation"
const Login = () => {
  const { handleChange, handleBlur,errors, touched, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema
  });

  return (
    <div className="col-lg-8 col-md-8 col-sm-12">
      <div className="w-100" id="loginandRegister">
        <div className="w-100 text-center h-100 loginWrapper d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} id="loginForm">
            <h2 className="formHeader fw-bold text-light">
              {" "}
              MEMBER <span className="orng-header">LOGIN </span>
            </h2>
            <p className="formTitle">
              SEND, RECEIVE AND SECURELY STORE YOUR COINS IN YOUR WALLET
            </p>
            <div className="inputWrapper">
            <input
            onChange={handleChange}
            onBlur={handleBlur}
              type="text"
              className={`loginInput ${
                errors.email && touched.email
                  ? "errorInput"
                  : " "
              }`}
              name="email"
              placeholder="EMAIL"
            />
            {errors.email && touched.email ? <span className="formErrorMessage">{errors.email}</span> : ""}
            </div>
          
            <div className="inputWrapper">
            <input
            onChange={handleChange}
            onBlur={handleBlur}
              name="password"
              type="password"
              className={`loginInput ${
                errors.password && touched.password
                  ? "errorInput"
                  : " "
              }`}
              placeholder="PASSWORD"
            />
            {errors.password && touched.password ? <span className="formErrorMessage">{errors.password}</span> : ""}
            </div>
            
            <button className="loginFormBtn" type="submit">
              LOGIN
            </button>
            <div className="goRegister-goLogin">
              DON'T HAVE AN ACCOUNT ? <Link to="/register">REGISTER NOW</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
