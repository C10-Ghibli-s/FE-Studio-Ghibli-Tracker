import React from "react";
import './FilmCard.scss';
import totoroImage from './images/Secondary_mark-totoro.png';
import { FilmWatched } from '../FilmWatched';
import { StarRating } from '../StarRating';

function FilmCard(){
    // BEM -> block element modifier
    // film-card-container
    // film-card__image
    // film-card__text-content
    return(
        <div className="film-card-container">
            <div className="film-card-image">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg" alt=''/>
            </div>
            <div className="film-card-content">
                <div className="film-card-head">
                    <div className="film-card-title">
                        <h2>My Neighbor Totoro</h2>
                        <h3>1988</h3>
                    </div>
                    <FilmWatched />  
                </div>
                <div className="film-card-body">
                    <p>Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.</p>
                </div>
                <StarRating />
                <img className="img-background" src={totoroImage} alt="totoro" />
            </div>
        </div>
       
    );
}

export {FilmCard}