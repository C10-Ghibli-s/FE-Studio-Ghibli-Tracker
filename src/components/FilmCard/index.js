import React from "react";
import "./FilmCard.scss";
import totoroImage from "./images/Secondary_mark-totoro.png";
import { FilmWatched } from "../FilmWatched";
import { StarRating } from "../StarRating";

function FilmCard({ film }) {
  // BEM -> block element modifier
  // film-card-container
  // film-card__image
  // film-card__text-content
  if (film) {
    return (
      <>
        <div className="film-card-container">
          <div className="film-card-image">
            <img src={film.movie_banner} alt="" />
          </div>
          <div className="film-card-content">
            <div className="film-card-head">
              <div className="film-card-title">
                <h2 onClick={(e) => console.log(e.target.value)}>
                  {film.title}
                </h2>
                <h3>{film.release_date}</h3>
              </div>
              <FilmWatched />
            </div>
            <div className="film-card-body">
              <p>{film.description}</p>
            </div>
            <StarRating />
            <img className="img-background" src={totoroImage} alt="totoro" />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export { FilmCard };
