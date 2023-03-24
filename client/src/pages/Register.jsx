import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      const userData = { name, email, password };
      dispatch(register(userData));
    }
  };

  const { name, email, password, confirmPassword } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    console.log(formData);
    if (isError) {
      toast.error(message);
    }
  }, [formData, user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="container login-div d-flex justify-content-center">
      <div className="border border-light shadow-lg login-container p-5 rounded">
        <h4 className="text-center mb-4">SIGNUP</h4>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            className="name-input border-0 border-top border-start border-end rounded-top"
            placeholder="Fullname"
          />
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            className="email-input border-0 border-top border-start border-end"
            placeholder="Email address"
          />
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            className="password-input border-0 border-top border-bottom border-start border-end"
            placeholder="Password"
          />
          <input
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            type="password"
            className="password-input border-0 border-top border-bottom border-start border-end rounded-bottom"
            placeholder="Confirm Password"
          />
          <button className="btn btn-primary w-100 mt-3 mb-3">Submit</button>
          <NavLink to="/login" className="ms-auto align-self-center">
            Already have an account? <u>Signin</u>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
