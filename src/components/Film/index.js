<<<<<<< HEAD
import React, { useContext } from "react";
import "./Film.css";
import { FaArrowRight } from "react-icons/fa";
import { StarRating } from "../StarRating";
import { FilmWatched } from "../FilmWatched";
import { AppContext } from "../../context/AppContext";

function Film() {
  // here it should receive an state of FILM.
  const {
    film: { film },
  } = useContext(AppContext);
  // console.log("film in film page", film[0].title);
  if (film) {
    return (
      <div className="film-component">
        <div className="film-container">
          <div className="film-head">
            <div className="film-title">
              <h1>{film.title}</h1>
              <h2>{film.release_date}</h2>
=======
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
>>>>>>> main
            </div>
            {/*We should sent films.movie_watched */}
            <FilmWatched filmWatched={false} />
          </div>
          <div className="film-image">
            <img src={film.movie_banner} alt="" />
          </div>
          <StarRating />
          <div className="film-body">
            <p>{film.description}</p>
          </div>
          <footer className="film-footer">
            <button className="film-btn">
              {/*This URL should be replaced by the object film.link_wiki that this component will receive*/}
              <a
                href="https://ghibli.fandom.com/wiki/My_Neighbor_Totoro"
                target={"_blank"}
              >
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
