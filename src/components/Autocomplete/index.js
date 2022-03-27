/* eslint-disable react/prop-types */
import React from "react";
import "../SearchEngine/SearchEngine.css";

function Autocomplete({ results, searchQuery, setResults, film, setFilm }) {
  // click the item and diplay it
  const handleItem = (e) => {
    let item = e.target.innerText;
    let object = results.filter((element) => {
      return element.title === item;
    });
    setFilm(object);
  };

  if (results.length > 0) {
    return (
      <ul>
        {results.map((film, index) => (
          <li onClick={handleItem} key={index}>
            {film.title}
          </li>
        ))}
        {!searchQuery && setResults([])}
      </ul>
    );
  } else {
    return false;
  }
}

export { Autocomplete };
