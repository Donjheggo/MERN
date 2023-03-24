import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-light p-3 shadow-sm">
      <nav className="container-fluid d-flex">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div className="nav-links ms-auto">
          <NavLink to="/login" className="me-4">
            <FaSignInAlt />
            &nbsp; Login
          </NavLink>
          <NavLink to="/register">
            <FaUser />
            &nbsp; Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
