import React, { useState, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import "./FilmWatched.scss";
import { AppContext } from "../../context/AppContext";

function FilmWatched({ watched, setWatched }) {
  const [hoverWatched, setHoverWatched] = useState(false);

  // context
  const { callIsWatched } = useContext(AppContext);
  //console.log("im callIsWatched", callIsWatched);

  const handleChangeWatched = () => {
    console.log("my actual value is", watched);
  };

  return (
    //Add validation and restriction with StarRating
    <div className="film-watched-component">
      <label>
        <input
          type="checkbox"
          name="watched"
          //onClick={()=>{watched === true ? setWatched(false) : setWatched(true) }}
          onClick={() => {
            if (watched === true) {
              setWatched(false);
              callIsWatched(false);
            } else {
              setWatched(true);
              callIsWatched(true);
            }
            handleChangeWatched();
          }}
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
