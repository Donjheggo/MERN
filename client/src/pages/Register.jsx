import React, {useState} from "react";
import { Form, NavLink } from "react-router-dom";

export const registerAction = async ({ request }) => {

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if(password !== confirmPassword){
    console.log("Password do not match")
    return {
      error: "Password do not match"
    }
  }

  try {
    // const register = await RegisterUser({email, password})
    // RegisterAPI
    console.log(email, password);
    return true;
  } catch (err) {
    return {
      error: err.message,
    };
  }
};

const Register = () => {
  
  return (
    <div className="container login-div d-flex justify-content-center">
      <div className="border border-light shadow-lg login-container p-5 rounded">
        <h4 className="text-center mb-4">SIGNUP</h4>
        <Form action="/register" method="POST">
          <input
            name="name"
            type="text"
            className="name-input border-0 border-top border-start border-end rounded-top"
            placeholder="Fullname"
          />
          <input
            name="email"
            type="email"
            className="email-input border-0 border-top border-start border-end"
            placeholder="Email address"
          />
          <input
            name="password"
            type="password"
            className="password-input border-0 border-top border-bottom border-start border-end"
            placeholder="Password"
          />
          <input
            name="confirmPassword"
            type="password"
            className="password-input border-0 border-top border-bottom border-start border-end rounded-bottom"
            placeholder="Confirm Password"
          />
          <button className="btn btn-primary w-100 mt-3 mb-3">Submit</button>
          <NavLink to="/login" className="ms-auto align-self-center">
            Already have an account? <u>Signin</u>
          </NavLink>
        </Form>
      </div>
    </div>
  );
};

export default Register;
