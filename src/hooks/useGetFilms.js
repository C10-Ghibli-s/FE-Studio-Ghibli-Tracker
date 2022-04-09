import axios from "axios";
import { useEffect } from "react";

const useGetFilms = () => {
  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    const films = response.data;
    return films;
  }, []);
};

export { useGetFilms };
