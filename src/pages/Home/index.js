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
  const [interUser, setInterUser] = useState({});
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
        setInterUser(response.data);
      })
      .catch(error => console.error(error.message));
  }, [setFilms]);

  console.log(interUser);

  // useEffect(() => {
  //   // let isSubscribed = true;
  //   // let user = JSON.parse(window.localStorage.getItem("userSession"));
  //   // let token = user.access_token;
  //   // let id = user.userId;
  //   // console.log("user id", user.userId);
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };

  //   axios
  //     .get(`${process.env.API_URL}interactions/filter/${id}`, config)
  //     .then(res => {
  //       console.log("interactions", res.data);
  //       // if (isSubscribed) {
  //       //   setInterUser(res.data);
  //       // }
  //       // return () => (isSubscribed = false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

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
        {films?.map((film, key) => (
          <Link className="linkFilm" key={film?.id} to={`/film/${key}`}>
            <FilmCard film={film} callFilm={callFilm} />
          </Link>
        ))}
      </div>
    </>
  );
}

export { Home };
