import axios from "axios";
import { useEffect } from "react";
import linkMovies from "../helpers/linkMovies";

const useGetFilms = () => {
  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    const films = response.data;
    // merge films and linkMovies if they have the same id
    const filmsWithLinkMovies = films.map(film => {
      const linkMovie = linkMovies.find(linkMovie => linkMovie.id === film.id);
      return { ...film, linkMovie };
    });
    return filmsWithLinkMovies;
  }, []);
};

export { useGetFilms };
