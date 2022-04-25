import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import { LandingPage } from "../pages/LandingPage";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

//pages copied by "home" just to make the representation of the menu functionallity
import { Profile } from "../pages/profile";
import { Scores } from "../pages/scores";
import { Watched } from "../pages/watched";
import { FilmView } from "../pages/FilmView";

// componentes en prueba, mover en cuanto esten listos
import { Facebook } from "../components/FacebookLogin";
import { StarRating } from "../components/StarRating";

/** Context
 * The context ables the components share information each other.
 */
import { AppContext } from "../context/AppContext";
import { UserContext } from "../context/UserContext";

// Hooks
import { useInitialState } from "../hooks/useInitialState";
import { useUserSession } from "../hooks/useUserSession";

function App() {
  const initialState = useInitialState();
  const userSession = useUserSession();

  return (
    <UserContext.Provider value={userSession}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/*" element={<LandingPage />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="profile" element={<Profile />} />

            <Route exact path="scores" element={<Scores />} />
            <Route exact path="watched" element={<Watched />} />

            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />

            <Route exact path="fb" element={<Facebook />} />
            <Route exact path="star-rating" element={<StarRating />} />
            <Route exact path="film" element={<FilmView />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </UserContext.Provider>
  );
}

export { App };
