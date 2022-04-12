import axios from "axios";
import React, { useState, useEffect } from "react";

const initialState = {
  films: [],
};

const useInitialState = () => {
  const [films, setFilms] = useState(initialState);
  const [film, setFilm] = useState(initialState);
  const [isWatched, setIsWatched] = useState(initialState);

  const callFilms = (payload) => {
    setFilms({ films: payload });
  };

  const callFilm = (payload) => {
    setFilm({ film: payload });
  };

  const callIsWatched = (payload) => {
    setIsWatched({ isWatched: payload});
  };

  return {
    films,
    callFilms,
    film,
    callFilm,
    isWatched,
    callIsWatched,
  };
};

export { useInitialState };
