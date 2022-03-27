import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/Home";
import { Facebook } from "../components/FacebookLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="login" element={<Facebook />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
