import React from "react";
import { StarRating } from "../StarRating";
import "./DoubleRating.css";

function DoubleRating({filmWatched, scoreRatingUser, audienceScoreRating}){
    //if filmWatched is true show star component with userscore
    //  and show star component with audence_score
    //if filmWatched is false show star component with usescore=0
    if (!filmWatched) {
        return(
            <div>
                <StarRating scoreRatingUser={0} />
            </div>
        );
    } else {
        return(
            <div className="score-rating-container">
                <div className="score-audience-content">
                    <p>Audience Score</p>
                    <StarRating scoreRatingUser={audienceScoreRating} />
                </div>
                <div className="score-user-content">
                    <p>Your Score</p>
                    <StarRating scoreRatingUser={scoreRatingUser} />
                </div>
            </div>
        );
    }
}

export { DoubleRating }