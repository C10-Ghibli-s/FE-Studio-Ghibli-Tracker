import React, { useContext, useState } from "react";
import "./Film.scss";
import { FaArrowRight } from "react-icons/fa";
import { DoubleRating } from "../DoubleRating";
import { FilmWatched } from "../FilmWatched";
import { AppContext } from "../../context/AppContext";
import { EmojisRate } from "../../components/EmojisRate";

function Film() {
  // here it should receive an state of FILM.
  const {
    film: { film },
  } = useContext(AppContext);

  const [watched, setWatched] = useState(false); // here should be the state from the DB
  // console.log("film in film page", film[0].title);
  if (film) {
    return (
      <div className="film-component">
        <div className="film-container">
          <div className="film-head">
            <div className="film-title">
              <h1>{film.title.title}</h1>
              <h2>{film.releaseDate}</h2>
            </div>
            {/*We should sent films.movie_watched */}
            <div className="interactionContainer">
              <FilmWatched watched={watched} setWatched={setWatched} />
              {!watched && <p> Mark as watched to rate this movie! </p>}
              {watched && (
                <>
                  <p>Watched</p>
                  <EmojisRate />
                </>
              )}
            </div>
          </div>
          <div className="film-image">
            <img src={film.movieBanner} alt="" />
          </div>
          {/*We should send films.movie_watched, films.score_by_stars, films.audence_score */}
          <DoubleRating
            watched={watched}
            scoreRatingUser={2}
            audienceScoreRating={film.audienceScore}
          />
          <div className="film-body">
            <p>{film.description}</p>
          </div>
          <footer className="film-footer">
            <button className="film-btn">
              {/*This URL should be replaced by the object film.link_wiki that this component will receive*/}
              <a
                href={film.linkWiki}
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
