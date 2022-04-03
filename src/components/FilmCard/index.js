import React from "react";
import './FilmCard.css';
import {FilmWatched} from '../FilmWatched';
import { StarRating } from '../StarRating';

function FilmCard(){
    return(
        <div className="film-card-container">
            <div className="film-card-image">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg" alt=''/>
            </div>
            <div className="film-card-content">
                <div className="film-head">
                    <div className="film-card-title">
                        <h1>title</h1>
                        <h2>year</h2>
                    </div>
                    <FilmWatched />  
                </div>
                <div className="film-card-body">
                    <p>description asdfasdfasfasdfasdfasdf</p>
                </div>
                <StarRating />
            </div>
        </div>
       
    );
}

export {FilmCard}