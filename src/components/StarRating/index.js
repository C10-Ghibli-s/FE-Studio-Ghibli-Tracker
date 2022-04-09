import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import './StarRating.css'

function StarRating({scoreRatingUser}){
    const [rating, setRating] = useState(scoreRatingUser);
    const [hover, setHover] = useState(null);

    return(
        <div className="star-rating-component">
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i + 1;

                return(
                    <label key={i}>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={()=> setRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                            size={20}
                            onMouseEnter = {()=> setHover(ratingValue)}
                            onMouseLeave = {() => setHover(null)}
                        />
                    </label>
                ); 
            })}
        </div>
    );
}

export { StarRating }