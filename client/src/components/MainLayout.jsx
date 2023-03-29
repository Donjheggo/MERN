import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
