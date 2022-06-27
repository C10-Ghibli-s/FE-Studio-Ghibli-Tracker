import React, { useContext } from "react";
import { StarRating } from "../StarRating";
import "./DoubleRating.scss";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function DoubleRating({ watched, scoreRatingUser, audienceScoreRating }) {
  //console.log("audienceScoreRating", audienceScoreRating);
  // here it should receive an state of isWatched.
  const {
    isWatched: { isWatched },
  } = useContext(AppContext);
  //console.log("isWatched result",isWatched);
  const animationFrom = { opacity: 0.6, y: -10 };
  const animationTo = { opacity: 1, y: 0 };
  return (
    <>
      <div className="score-rate">
        <p>Rate</p>
        <FaStar
          className="star"
          //   color={ratingValue <= (hover || rating) ? "#ffc107" : "#D2D2D2"}
          size={20}
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
        />
      </div>
      <div className="score-rating-audience">
        <StarRating scoreRatingUser={audienceScoreRating} />
      </div>
      {watched && (
        <motion.div initial={animationFrom} animate={animationTo}>
          <div className="score-rating-user">
          {/**className={`score ${isWatched ? "active" : ""}`} */}
          <StarRating scoreRatingUser={scoreRatingUser} />
          </div>
        </motion.div>
      )}
    </>
  );
}

export { DoubleRating };
