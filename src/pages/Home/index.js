import React, { useState, useEffect, useContext } from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Filter } from "../../components/Filter";
import { FilmCard } from "../../components/FilmCard";
import { UserSessionValidation } from "../../components/UserSessionValidation";
import axios from "axios";
import { Menu } from "../../components/Menu";
import { Link, Navigate } from "react-router-dom";
import "./Home.scss";
// Context
import { AppContext } from "../../context/AppContext";
import linkMovies from "../../helpers/linkMovies";

function Home() {
  // fetch Data
  const [films, setFilms] = useState([]);
  const [allUserInteractions, setAllUserInteractions] = useState([]);
  let user = JSON.parse(window.localStorage.getItem("userSession"));
  let token = user.access_token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}movies`, config)
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => console.error(error.message));
    axios
      .get(`${process.env.API_URL}interactions/filter/${user.userId}`, config)
      .then(response => {
        setAllUserInteractions(response.data);
      })
      .catch(error => console.error(error.message));
  }, [setFilms]);

  const idFilms = films.map(film => film.id);
  const idInteractions = allUserInteractions.map(
    interaction => interaction.movie.id
  );
  // match idFilms and idInteractions
  const idFilmsInteractions = idFilms.filter(id => idInteractions.includes(id));
  const idFilmsInteractionsFiltered = films.filter(film =>
    idFilmsInteractions.includes(film.id)
  );
  // filter films with userInteractions
  const filmsWithInteractions = idFilmsInteractionsFiltered.map(film => {
    const userInteraction = allUserInteractions.find(
      interaction => interaction.movie.id === film.id
    );
    return { ...film, userInteraction };
  });
  // take the films without interactions in the same array as well
  const filmsWithoutInteractions = films.filter(
    film => !idFilmsInteractions.includes(film.id)
  );
  // merge the two arrays
  const filmsWithAndWithoutInteractions = [
    ...filmsWithInteractions,
    ...filmsWithoutInteractions,
  ];

  // merge filmsWithAndWithoutInteractions and linkMovies if they have the same id
  const filmsWithAndWithoutInteractionsAndLinkMovies =
    filmsWithAndWithoutInteractions.map(film => {
      const linkMovie = linkMovies.find(linkMovie => linkMovie.id === film.id);
      return { ...film, linkMovie };
    });

  // context
  const { callFilm } = useContext(AppContext);

  // Filter toggle state
  const [toggleFilter, setToggleFilter] = useState(false);

  // setting mainCurrPage
  localStorage.setItem("currMainPage", window.location.pathname);

  // Menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Filter toggle function
  const handleToggle = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <>
      <UserSessionValidation />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleFilter={toggleFilter}
        setToggleFilter={setToggleFilter}
      />
      <div className="searchContainer">
        <SearchEngine
          films={filmsWithAndWithoutInteractionsAndLinkMovies}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <span
          onClick={() => {
            handleToggle();
            if (menuOpen) {
              setMenuOpen(!menuOpen);
            }
          }}
          className="filter-icon"
        />
      </div>
      {!!toggleFilter && <Filter films={films} setFilms={setFilms} />}
      <div className="film-cards-container">
        {filmsWithAndWithoutInteractionsAndLinkMovies?.map((film, key) => (
          <Link className="linkFilm" key={key} to={`/film/${film?.id}`}>
            <FilmCard film={film} callFilm={callFilm} />
          </Link>
        ))}
      </div>
    </>
  );
}

export { Home };
