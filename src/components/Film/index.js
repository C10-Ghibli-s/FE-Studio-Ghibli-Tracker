import React, { useContext, useState } from "react";
import "./Film.scss";
import { FaArrowRight } from "react-icons/fa";
import { DoubleRating } from "../DoubleRating";
import { FilmWatched } from "../FilmWatched";
import { AppContext } from "../../context/AppContext";
import { EmojisRate } from "../../components/EmojisRate";
import { FilmVideo } from "../../components/FilmVideo";
import { FaAngleUp } from "react-icons/fa";

function Film() {
  const {
    film: { film },
  } = useContext(AppContext);
  const [openCredits, setOpenCredits] = useState(false);
  // here it should receive an state of FILM.

  const handleCredits = () => {
    setOpenCredits(!openCredits);
  };

  const [watched, setWatched] = useState(false); // here should be the state from the DB
  // console.log("film in film page", film[0].title);
  if (film) {
    return (
      <div className="film-component">
        <div className="film-title-container">
          <h1>{film.title.title}</h1>
          <p>
            {film.releaseDate} • {film.duration}m
          </p>
        </div>
        {/*We should sent films.movie_watched */}
        <div className="film-video_container">
          <FilmVideo />
          <figure className="film-image">
            <img src={film.movieBanner} alt={film.title.title} />
          </figure>
        </div>
        <div className="film-description-container">
          <p>{film.description}</p>
        </div>
        <div className="film-interactions-container">
          {/* <div> */}
            <FilmWatched watched={watched} setWatched={setWatched} />
            {watched && <EmojisRate />}
          {/* </div> */}
          <DoubleRating
            watched={watched}
            scoreRatingUser={2}
            audienceScoreRating={parseInt(film.audienceScore)}
          />
          <a href={film.linkWiki} target={"_blank"}>
            More info
            <FaAngleUp />
          </a>
        </div>
        <div className="film-credits-container">
          <h3 onClick={handleCredits}>
            <span>
              <FaAngleUp className={`${openCredits ? "arrow-rotate" : ""} `} />
            </span>
            Top credits
          </h3>
          {openCredits && (
            <ol>
              <li>Writers {`• John Doe • John Doe • John Doe`}</li>
              <li className="separator">
                Directors {`• John Doe • John Doe • John Doe`}
              </li>
              <li className="separator">
                Musicians {`• John Doe • John Doe • John Doe`}
              </li>
            </ol>
          )}
        </div>
      </div>
    );
  } else {
    return <p>"error";</p>;
  }
}

export { Film };
