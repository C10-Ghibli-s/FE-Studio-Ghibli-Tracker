import React, { useContext, useState } from "react";
import "./Film.scss";
import { FaArrowRight } from "react-icons/fa";
import { DoubleRating } from "../DoubleRating";
import { FilmWatched } from "../FilmWatched";
import { AppContext } from "../../context/AppContext";
import { EmojisRate } from "../../components/EmojisRate";
import { FilmVideo } from "../../components/FilmVideo";
import { FaAngleUp } from "react-icons/fa";
import linkMovies from "../../helpers/linkMovies";

// Update interaction for user: https://studio-ghibli-c10-platzimaster.herokuapp.com/users/{userid}/update/{movieId}/interaction/{InteractionId}
// Filter interaction by user: https://studio-ghibli-c10-platzimaster.herokuapp.com/interactions/filter/{userId}
// Create interaction: https://studio-ghibli-c10-platzimaster.herokuapp.com/interactions

function Film() {
  const {
    film: { film },
  } = useContext(AppContext);
  const [openCredits, setOpenCredits] = useState(false);

  const [scoreRatingUser, setScoreRatingUser] = useState("");
  const [interaction, setInteraction] = useState({});
  const [watched, setWatched] = useState(false);

  const handleCredits = () => {
    setOpenCredits(!openCredits);
  };

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
          <FilmVideo url={film?.linkMovie?.url_youtube} />
          <figure className="film-image">
            <img src={film.movieBanner} alt={film.title.title} />
          </figure>
        </div>
        <div className="film-description-container">
          <p>{film.description}</p>
        </div>
        <div className="film-interactions-container">
          {/* <div> */}
          <FilmWatched
            watched={watched}
            setWatched={setWatched}
            film={film}
            setInteraction={setInteraction}
            interaction={interaction}
          />
          {watched && (
            <EmojisRate
              film={film}
              interaction={interaction}
              scoreRatingUser={scoreRatingUser}
              watched={watched}
              setWatched={setWatched}
              setInteraction={setInteraction}
            />
          )}
          {/* </div> */}
          <DoubleRating
            watched={watched}
            scoreRatingUser={scoreRatingUser}
            film={film}
            audienceScoreRating={parseInt(film?.audienceScore)}
            setScoreRatingUser={setScoreRatingUser}
          />
          <a href={film.linkWiki} target={"_blank"}>
            More info
            <FaAngleUp />
          </a>
        </div>
        {/* <div className="film-credits-container">
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
        </div> */}
      </div>
    );
  } else {
    return <p>"error";</p>;
  }
}

export { Film };
