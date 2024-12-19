import React from "react";
import Navbar from "./Navbar/navbar.component";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/footer.component";

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
