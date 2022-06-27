import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.scss";

function StarRating({ scoreRatingUser }) {
  const [rating, setRating] = useState(scoreRatingUser);
  const [hover, setHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, i) => {
        i *= 20;
        const ratingValue = i + 20;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#D2D2D2"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </>
  );
}

export { StarRating };
