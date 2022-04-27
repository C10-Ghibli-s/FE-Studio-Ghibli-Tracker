import React, { useContext } from "react";
import { StarRating } from "../StarRating";
import "./DoubleRating.css";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

function DoubleRating({watched, scoreRatingUser, audienceScoreRating}){
    //console.log("audienceScoreRating", audienceScoreRating);
    // here it should receive an state of isWatched.
    const {
        isWatched: { isWatched },
    } = useContext(AppContext);
    //console.log("isWatched result",isWatched);
    const animationFrom = {opacity: 0.6, y: -10};
    const animationTo = {opacity: 1, y: 0};   
    return (
        <div className="score-rating-container">
            <div className="score-audience-content">
                <p>Audience Score</p>
                <StarRating scoreRatingUser={audienceScoreRating} />
            </div>
        { watched &&
        <motion.div
            initial={animationFrom} 
            animate={animationTo}
        > 
            {/**className={`score ${isWatched ? "active" : ""}`} */}
            <p>Your Score</p>
            <StarRating scoreRatingUser={scoreRatingUser} />
        </motion.div>
        }
        </div>
    );
}

export { DoubleRating }
