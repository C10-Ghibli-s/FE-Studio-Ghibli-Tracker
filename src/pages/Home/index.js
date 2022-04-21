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

function Home() {
  // fetch Data
  const [films, setFilms] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    let user = window.localStorage.getItem("userSession");
    console.log(user);
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsInN1YiI6MTAsImlhdCI6MTY1MDUxMTM4MCwiZXhwIjoxNjUxMzc1MzgwfQ.43-Fw-wzRr5K5-Z6m30Md7_CWBaoOFMNtIFpolUJkfk";
    //console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios
      //.get("https://ghibliapi.herokuapp.com/films")
      .get("https://studio-ghibli-c10-platzimaster.herokuapp.com/movies",
      config
      )
      .then(response => {
        console.log(response.data);
        if (isSubscribed) {
          setFilms(response.data);
        }
        return () => (isSubscribed = false);
      })
      .catch(error => console.error(error.message));
  }, []);

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
          films={films}
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
        {films.map((film, key) => (
          <React.Fragment key={key}>
            <FilmCard film={film} callFilm={callFilm} />
          </React.Fragment>
        ))}
        <Link className="linkFilm" id="linkFilm" to="/film"></Link>
      </div>
    </>
  );
}

export { Home };
