import React from "react";
import { FaHeart } from 'react-icons/fa';
import './FilmWatched.css'

function FilmWatched(){
    return(
        <div className="film-watched-component">
            <label>
                <input
                    type="checkbox"
                />
                <FaHeart
                    className="heart"
                    size={20}
                />
            </label>
            
        </div>
    );
}

export { FilmWatched }