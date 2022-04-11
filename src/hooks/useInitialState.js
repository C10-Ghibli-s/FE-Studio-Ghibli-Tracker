import axios from "axios";
import React, { useState, useEffect } from "react";

const initialState = {
  films: [],
};

const useInitialState = () => {
  const [films, setFilms] = useState(initialState);
  const [film, setFilm] = useState(initialState);

  const callFilms = (payload) => {
    setFilms({ films: payload });
  };

  const callFilm = (payload) => {
    setFilm({ film: payload });
  };

  return {
    films,
    callFilms,
    film,
    callFilm,
  };
};

export { useInitialState };
