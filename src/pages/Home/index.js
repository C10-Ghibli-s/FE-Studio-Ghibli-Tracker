import React, { useState, useEffect, useContext } from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Filter } from "../../components/Filter";
import { FilmCard } from "../../components/FilmCard";
import axios from "axios";
import { Menu } from "../../components/Menu";
import "./Home.scss";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function Home() {
  // fetch Data
  const [films, setFilms] = useState([]);
  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    setFilms(response.data);
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
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleFilter={toggleFilter}
        setToggleFilter={setToggleFilter}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
        {films.map((item, key) => (
          <Link key={key} className="autocomplete--items-anchor" to={"/film"}>
            <div onClick={() => callFilm(item)} style={{ margin: "10px" }}>
              <FilmCard style={{ margin: "10px" }} film={item} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export { Home };
