import React from "react";
import { StarRating } from "../StarRating";

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
            <div>
                <p>Audience Score</p>
                <StarRating scoreRatingUser={audienceScoreRating} />
                <p>Your Score</p>
                <StarRating scoreRatingUser={scoreRatingUser} />
            </div>
        );
    }
}

export { DoubleRating }