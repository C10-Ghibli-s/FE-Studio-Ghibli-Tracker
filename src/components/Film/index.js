import React,{ useState, useEffect } from "react";
import './Film.css';
import { FaArrowRight } from 'react-icons/fa';
import { StarRating } from '../StarRating';
import { FilmWatched } from '../FilmWatched';
import axios from "axios";
import "typeface-roboto"; //it should be in general config styles because the test fail

function Film(){
    // fetch Data
    const [films, setFilms] = useState([]);

    useEffect(async () => {
        const response = await axios.get("https://ghibliapi.herokuapp.com/films");
        setFilms(response.data);
    }, []);

    if(films.length > 0){
        return(
            <div className="film-component">
                <div className="film-container">
                    <div className="film-head">
                        <h1>{films[2].title}</h1>
                        <h2>{films[2].release_date}</h2>
                        <FilmWatched />  
                    </div>
                    <div className="film-image">
                        <img src={films[2].movie_banner} alt=''/>
                    </div>
                    <StarRating />
                    <div className="film-body">
                        <p>{films[2].description}</p>
                    </div>
                    <div className="film-btn">
                        <button>
                            <a>
                                More info   
                            </a>
                            <span>
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>
                </div>  
            </div>
        );
    }else{
        return(
            null
        );
    }




    
}

export { Film }