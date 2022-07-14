import React, { useState, useEffect } from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Film } from "../../components/Film";
import axios from "axios";
import "./FilmView.scss";
import { GoBackButton } from "../../components/BackLink";

function FilmView() {
  // fetch Data
  const [films, setFilms] = useState([]);
  // Filter toggle state
  const [toggleFilter, setToggleFilter] = useState(false);

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
      <div className="gobackbutton-container">
        <GoBackButton />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchEngine films={films} />
      </div>
      <Film />
    </>
  );
}

export { FilmView };
