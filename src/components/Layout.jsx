import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
