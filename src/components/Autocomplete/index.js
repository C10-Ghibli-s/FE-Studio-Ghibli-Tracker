/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../SearchEngine/SearchEngine.scss";
import { AppContext } from "../../context/AppContext";
function Autocomplete({ results }) {
  const { callFilm } = useContext(AppContext);
  // click the item and diplay it
  if (results.length > 0) {
    return (
      <ul aria-labelledby="list-results" className="autocomplete">
        {results.map((film, index) => (
          <li
            alt="item-result"
            className="autocomplete--items"
            onClick={() => callFilm(film)}
            key={index}
          >
            <Link className="autocomplete--items-anchor" to={`/film/${film?.id}`}>
              {film.title.title}
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
