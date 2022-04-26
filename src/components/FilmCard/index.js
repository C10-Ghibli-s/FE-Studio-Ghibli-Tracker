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
  // BEM -> block element modifier
  // film-card-container
  // film-card__image
  // film-card__text-content
  const { emojiRate } = useContext(AppContext);

  const [inter, setInter] = useState({});
  console.log("inter", inter);

  if (film) {

    useEffect(() => {
      let user = JSON.parse(window.localStorage.getItem("userSession"));
      let token = user.access_token;
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
  
      axios
        .get(`https://studio-ghibli-c10-platzimaster.herokuapp.com/interactions/${film.id}`,
        config
        )
        .then(response => {
          setInter(response.data);
        })
        .catch(error => console.error(error.message));
    }, []);


    return (
      <>
        <div className="film-card-container">
          <div className="film-card-image" onClick={()=> {callFilm(film);document.getElementById("linkFilm").click()}}>
            <img src={film.movieBanner} alt="" />
          </div>
          <div className="film-card-content" onClick={()=> {callFilm(film);document.getElementById("linkFilm").click()}}>
            <div className="film-card-head">
              <div className="film-card-title">
                <h2 onClick={(e) => console.log(e.target.value)}>
                  {film.title.title}
                </h2>
                <h3>{film.releaseDate}</h3>
              </div>
              <div className="film-card--options" >
                <FilmWatched watched={inter.seenMark}/>
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
            <StarRating scoreRatingUser={parseInt(inter.scoreByStar)} />
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
