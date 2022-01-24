import React from "react";
import { Link } from "react-router-dom";
import "./style/loginandregister.css";
import { useFormik } from "formik";
import validationSchema from "./Validation/RegisterValidation"
const Login = () => {
  const { handleChange, handleBlur, values,errors, touched, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },validationSchema
  });

  return (
    <div className="col-lg-8 col-md-8 col-sm-12">
      <div className="w-100" id="loginandRegister">
        <div className="w-100 text-center h-100 loginWrapper d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} id="registerForm">
            <h2 className="formHeader fw-bold text-light">
              {" "}
              MEMBER <span className="orng-header">LOGIN </span>
            </h2>
            <p className="formTitle">
              SEND, RECEIVE AND SECURELY STORE YOUR COINS IN YOUR WALLET
            </p>
            <div className="inputWrapper">
            <input
              type="text"
              className={`loginInput ${
                errors.name && touched.name
                  ? "errorInput"
                  : " "
              }`}
              name="name"
              placeholder="NAME"
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.name && touched.name ? <span className="formErrorMessage">{errors.name}</span> : ""}
            </div>
            <div className="inputWrapper">
            <input
              type="text"
              className={`loginInput ${
                errors.email && touched.email
                  ? "errorInput"
                  : " "
              }`}
              name="email"
              placeholder="EMAIL"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <span className="formErrorMessage">{errors.email}</span> : ""}
            </div>
            <div className="inputWrapper">
            <input
              type="password"
              className={`loginInput ${
                errors.password && touched.password
                  ? "errorInput"
                  : " "
              }`}
              placeholder="PASSWORD"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <span className="formErrorMessage">{errors.password}</span> : ""}
            </div>
            <div className="inputWrapper">
            <input
              type="password"
              className={`loginInput ${
                errors.passwordConfirm && touched.passwordConfirm
                  ? "errorInput"
                  : " "
              }`}
              placeholder="CONFIRM PASSWORD"
              name="passwordConfirm"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm ? <span className="formErrorMessage">{errors.passwordConfirm}</span> : ""}
            </div>

            <button className="loginFormBtn" type="submit">
              REGISTER
            </button>
            <div className="goRegister-goLogin">
              ALREADY HAVE AN ACCOUNT ? <Link to="/login">LOGIN</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
