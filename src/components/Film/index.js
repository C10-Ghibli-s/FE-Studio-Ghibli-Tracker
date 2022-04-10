import React,{ useState, useEffect } from "react";
import './Film.css';
import { FaArrowRight } from 'react-icons/fa';
import { FilmWatched } from '../FilmWatched';
import axios from "axios";
import { DoubleRating } from "../DoubleRating";

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
                        <div className="film-title">
                            <h1>{films[2].title}</h1>
                            <h2>{films[2].release_date}</h2>
                        </div>
                        {/*We should send films.movie_watched */}
                        <FilmWatched filmWatched={true}/>  
                    </div>
                    <div className="film-image">
                        <img src={films[2].movie_banner} alt=''/>
                    </div>
                    {/*We should send films.score_by_stars */}
                    {/*<StarRating scoreRatingUser={2} />*/}
                    {/*We should send films.movie_watched, films.score_by_stars, films.audence_score */}
                    <DoubleRating filmWatched={true} scoreRatingUser={2} audienceScoreRating={4}/>
                    <div className="film-body">
                        <p>{films[2].description}</p>
                    </div>
                    <footer className="film-footer">
                        <button className="film-btn">
                            {/*This URL should be replaced by the object film.link_wiki that this component will receive*/}
                            <a href="https://ghibli.fandom.com/wiki/My_Neighbor_Totoro" target={"_blank"}>
                                <span>More info</span>
                                <FaArrowRight />
                            </a>
                        </button>
                    </footer>      
                </div>  
            </div>
    );
  } else {
    return <p>"error";</p>;
  }
}

export { Film };
