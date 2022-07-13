import React, { useState, useContext, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import "./FilmWatched.scss";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

function FilmWatched({
  interaction,
  setInteraction,
  watched,
  setWatched,
  film,
}) {
  const [hoverWatched, setHoverWatched] = useState(false);

  const handleChangeWatched = () => {
    setWatched(!watched);
  };
  return (
    //Add validation and restriction with StarRating
    <div className="film-watched-component">
      <label>
        <input
          type="checkbox"
          name="watched"
          //onClick={()=>{watched === true ? setWatched(false) : setWatched(true) }}
          onClick={handleChangeWatched}
        />
        <FaHeart
          className="heart"
          size={30}
          color={(watched || hoverWatched) === true ? "#C22F80" : "#D2D2D2"}
          onMouseEnter={() => setHoverWatched(true)}
          //Desktop version
          onMouseLeave={() => setHoverWatched(false)}
          //Mobile version
          onTouchEnd={() => setHoverWatched(false)}
        />
      </label>
    </div>
  );
}

export { FilmWatched };
