import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./inicial/components/Navbar";
import Content from "./inicial/components/Content";
import Sobre from "./sobre/Sobre";

const Pages = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={ <Content /> } path="/" />
        <Route element={ <Sobre /> } path="/Sobre" />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
