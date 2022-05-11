import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/top/index";
import Content from "../container/home/home";
import Sobre from "../container/sobre/sobre";

const Pages = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={ <Content /> } path="/" />
        {/* <Route element={ <Sobre /> } path="/Sobre" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
