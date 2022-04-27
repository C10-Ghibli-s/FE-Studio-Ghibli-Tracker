import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import './StarRating.css'

function StarRating({scoreRatingUser}){
    //console.log("scoreRatingUser from StarRatingComponent", scoreRatingUser);
    const [rating, setRating] = useState(scoreRatingUser);
    const [hover, setHover] = useState(null);

    //console.log("rating",rating);

    return(
        <div className="star-rating-component">
            {[...Array(5)].map((star, i)=>{
                i *=20;
                const ratingValue = (i + 20);
                //console.log(i, ratingValue);

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
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#D2D2D2" }
                            size={20}
                            onMouseEnter = {()=> setHover(ratingValue)}
                            onMouseLeave = {() => setHover(null)}
                        />
                    </label>
                ); 
            }) }
        </div>
    );
}

export { StarRating }