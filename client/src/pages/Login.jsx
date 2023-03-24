import React from "react";
import { useActionData, Form, NavLink } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    // const login = await loginUser({email, password})
    // LoginAPI
    console.log(email, password);
    return true;
  } catch (err) {
    return {
      error: err.message,
    };
  }
};

const Login = () => {
  return (
    <div className="container login-div d-flex justify-content-center">
      <div className="border border-light shadow-lg login-container p-5 rounded">
        <h4 className="text-center mb-4">SIGNIN</h4>
        <Form action="/login" method="POST">
          <input
            name="email"
            type="email"
            className="email-input border-0 border-top border-start border-end rounded-top"
            placeholder="Email address"
          />
          <input
            name="password"
            type="password"
            className="password-input border-0 border-top border-bottom border-start border-end rounded-bottom"
            placeholder="**********"
          />
          <button className="btn btn-primary w-100 mt-3 mb-3">Submit</button>
          <NavLink to="/register" className="ms-auto align-self-center">
            Doesn't have an account? <u>Signup</u>
          </NavLink>
        </Form>
      </div>
    </div>
  );
};

export default Login;
