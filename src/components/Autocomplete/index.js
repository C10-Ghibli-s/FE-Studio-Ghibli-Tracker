/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../SearchEngine/SearchEngine.scss";

function Autocomplete({ results, setFilm }) {
  // click the item and diplay it
  const handleItem = (e) => {
    let item = e.target.innerText;
    let object = results.filter((element) => {
      return element.title === item;
    });
    setFilm(object);
  };
  console.log("results", results);

  if (results.length > 0) {
    return (
      <ul aria-labelledby="list-results" className="autocomplete">
        {results.map((film, index) => (
          <li
            alt="item-result"
            className="autocomplete--items"
            onClick={handleItem}
            key={index}
          >
            <Link className="autocomplete--items-anchor" to={"/film"}>
              {film.title}
            </Link>
          </li>
        ))}
        <li className="autocomplete--more-results">
          See more results <span>➡</span>
        </li>
      </ul>
    );
  } else {
    return false;
  }
}

export { Autocomplete };
