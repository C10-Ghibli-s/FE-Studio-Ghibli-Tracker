import { useState } from "react";

const initialState = {};

const useInitialState = () => {
  const [film, setFilm] = useState(initialState);
  // const [isWatched, setIsWatched] = useState(initialState);

  const callFilm = payload => {
    setFilm({ film: payload });
  };

  // const callIsWatched = payload => {
  //   setIsWatched({ isWatched: payload });
  // };

  return {
    film,
    callFilm,
    // isWatched,
    // callIsWatched,
  };
};

export { useInitialState };
