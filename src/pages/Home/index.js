import React, { useState, useEffect, useContext } from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Filter } from "../../components/Filter";
import { FilmCard } from "../../components/FilmCard";
import axios from "axios";
import { Menu } from "../../components/Menu";
import { Link, Navigate } from "react-router-dom"
import "./Home.scss";
// Context
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

function Home() {
  // fetch Data
  const [films, setFilms] = useState([]);
  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    setFilms(response.data);
  }, []);
  // context
  const { callFilm } = useContext(AppContext);
  const { login, userSession } = useContext(UserContext)
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
      {!userSession.access_token && <Navigate to="/login" replace={true} />}
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleFilter={toggleFilter}
        setToggleFilter={setToggleFilter}
      />
      <div className="searchContainer">
        <SearchEngine
          films={films}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <span
          onClick={() => {
            handleToggle()
            if (menuOpen) {
              setMenuOpen(!menuOpen)
            }
          }}
          className="filter-icon"
        />
      </div>
      {!!toggleFilter && <Filter films={films} setFilms={setFilms} />}
      <div className="film-cards-container">
        {films.map((film, key) => (
          <React.Fragment key={key}>
            <FilmCard film={film} callFilm={callFilm} />
          </React.Fragment>
        ))}
        <Link className="linkFilm" id="linkFilm" to="/film"></Link>
      </div>
    </>
  )
}

export { Home };
