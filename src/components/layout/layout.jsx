import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;