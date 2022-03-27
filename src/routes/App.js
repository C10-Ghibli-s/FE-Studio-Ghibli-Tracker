import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/Home";
import { Facebook } from "../components/FacebookLogin";
import { StarRating } from "../components/StarRating";
import { Film } from "../components/Film";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="login" element={<Facebook />} />
        <Route exact path="star-rating" element={<StarRating />} />
        <Route exact path="film" element={<Film />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
