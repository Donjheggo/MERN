import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className="bg-light p-3 shadow-sm">
      <nav className="container-fluid d-flex">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div className="nav-links ms-auto">
          {user ? (
            <>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="me-4">
                &nbsp; Login
              </NavLink>
              <NavLink to="/register">&nbsp; Register</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
