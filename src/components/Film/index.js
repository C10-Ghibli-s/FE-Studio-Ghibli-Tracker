import React, { useContext } from "react";
import "./Film.css";
//import "./Film.scss";
import { FaArrowRight } from "react-icons/fa";
import { StarRating } from "../StarRating";
import { FilmWatched } from "../FilmWatched";
import { AppContext } from "../../context/AppContext";

function Film() {
  // here it should receive an state of FILM.
  const {
    film: { film },
  } = useContext(AppContext);
  // console.log("film in film page", film[0].title);
  if (film) {
    return (
      <div className="film-component">
        <div className="film-container">
          <div className="film-head">
            <div className="film-title">
              <h1>{film.title}</h1>
              <h2>{film.release_date}</h2>
            </div>
            {/*We should sent films.movie_watched */}
            <FilmWatched filmWatched={false} />
          </div>
          <div className="film-image">
            <img src={film.movie_banner} alt="" />
          </div>
          <StarRating />
          <div className="film-body">
            <p>{film.description}</p>
          </div>
          <footer className="film-footer">
            <button className="film-btn">
              {/*This URL should be replaced by the object film.link_wiki that this component will receive*/}
              <a
                href="https://ghibli.fandom.com/wiki/My_Neighbor_Totoro"
                target={"_blank"}
              >
                <span>More info</span>
                <FaArrowRight />
              </a>
            </button>
          </footer>
        </div>
      </div>
    );
  } else {
    return <p>"error";</p>;
  }
}

export { Film };