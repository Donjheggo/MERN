import React, {useEffect} from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../features/auth/authSlice";
import Loader from "../components/Loader"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try{
      dispatch(login({email, password}))
    }catch(err){
      toast.error(err.message);
    }
  }
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if(isSuccess || user){
      navigate('/')
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="container login-div d-flex justify-content-center">
      <div className="border border-light shadow-lg login-container p-5 rounded">
        <h4 className="text-center mb-4">SIGNIN</h4>
        <Form onSubmit={handleSubmit}>
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
