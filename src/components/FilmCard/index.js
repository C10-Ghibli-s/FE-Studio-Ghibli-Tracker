import React, { useContext } from "react";
import "./FilmCard.scss";
import totoroImage from "./images/Secondary_mark-totoro.png";
import { FilmWatched } from "../FilmWatched";
import { StarRating } from "../StarRating";
import { AppContext } from "../../context/AppContext";

import add from "../EmojisRate/images/add.png";
import happyActive from "../EmojisRate/images/happyActive.png";
import neutralActive from "../EmojisRate/images/neutralActive.png";
import sadActive from "../EmojisRate/images/sadActive.png";


function FilmCard({ film, callFilm }) {
  // BEM -> block element modifier
  // film-card-container
  // film-card__image
  // film-card__text-content
  const { emojiRate } = useContext(AppContext);
  if (film) {
    return (
      <>
        <div className="film-card-container">
          <div className="film-card-image" onClick={()=> {callFilm(film);document.getElementById("linkFilm").click()}}>
            <img src={film.movie_banner} alt="" />
          </div>
          <div className="film-card-content" onClick={()=> {callFilm(film);document.getElementById("linkFilm").click()}}>
            <div className="film-card-head">
              <div className="film-card-title">
                <h2 onClick={(e) => console.log(e.target.value)}>
                  {film.title}
                </h2>
                <h3>{film.release_date}</h3>
              </div>
              <div className="film-card--options">
                <FilmWatched />
                {/* THIS IS COMMENTED UNTIL THE API-DB WORKS FOR EMOJI-RATING -> USER
                { (emojiRate == "add" && !emojiRating) && <button className="EmojiRating--add" onClick={()=> setEmojiRating(!emojiRating)}><img src={add}></img></button>}
                { (emojiRate == "happy") && <button className="EmojiRating--add happy" onClick={()=> setEmojiRating(!emojiRating)}><img src={happyActive}></img></button>}
                { (emojiRate == "neutral") && <button className="EmojiRating--add neutral" onClick={()=> setEmojiRating(!emojiRating)}><img src={neutralActive}></img></button>}
                { (emojiRate == "sad") && <button className="EmojiRating--add sad" onClick={()=> setEmojiRating(!emojiRating)}><img src={sadActive}></img></button>} */}
              </div>
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
