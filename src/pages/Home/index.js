import React, { useState, useEffect } from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Filter } from "../../components/Filter";
import { FilmCard } from "../../components/FilmCard";
import axios from "axios";
import { Menu } from "../../components/Menu";
import "./Home.scss";

function Home() {
  // fetch Data
  const [films, setFilms] = useState([]);
  // Filter toggle state
  const [toggleFilter, setToggleFilter] = useState(false);
  // setting mainCurrPage
  localStorage.setItem("currMainPage", window.location.pathname);
  // Menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    setFilms(response.data);
  }, []);
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
      setToggleFilter={setToggleFilter}/>
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
        <span onClick={()=> {handleToggle();
          if(menuOpen) {
            setMenuOpen(!menuOpen)
          }
        }} className="filter-icon" />
      </div>
      {!!toggleFilter && <Filter films={films} setFilms={setFilms} />}
      <div className="film-cards-container">
        {films.map((item) => (
          <div style={{ margin: "10px" }} key={item.id}>
            <FilmCard film={item} />
          </div>
        ))}
      </div>
      <div>
        <FilmCard />
      </div>
    </>
  );
}

export { Home };
