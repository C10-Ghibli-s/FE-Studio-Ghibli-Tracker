import React, { useState, useEffect, useContext } from "react";
import "./FilmCard.scss";
import totoroImage from "./images/Secondary_mark-totoro.png";
import { FilmWatched } from "../FilmWatched";
import { StarRating } from "../StarRating";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

import add from "../EmojisRate/images/add.png";
import happyActive from "../EmojisRate/images/happyActive.png";
import neutralActive from "../EmojisRate/images/neutralActive.png";
import sadActive from "../EmojisRate/images/sadActive.png";

function FilmCard({ film, callFilm }) {
  if (film.userInteraction || film) {
    return (
      <>
        <div className="film-card-container">
          <div
            className="film-card-image"
            onClick={() => {
              callFilm(film);
            }}
          >
            <img src={film.movieBanner} alt="" />
          </div>
          <div
            className="film-card-content"
            onClick={() => {
              callFilm(film);
            }}
          >
            <div className="film-card-head">
              <div className="film-card-title">
                <h2 onClick={e => e.target.value}>{film.title.title}</h2>
                <h3>{film.releaseDate}</h3>
              </div>
              <div className="film-card--options">
                <div className="disable">
                  <FilmWatched watched={film?.userInteraction?.seenMark} />
                </div>
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
            <div className="disable">
              <StarRating
                scoreRatingUser={film?.userInteraction?.scoreByStar}
              />
            </div>
            {/**Whe should send the user score, should be in the interactions entity*/}
            {/**<StarRating scoreRatingUser={film.userScore} />*/}
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
