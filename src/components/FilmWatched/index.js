import React, {useState} from "react";
import { FaHeart } from 'react-icons/fa';
import './FilmWatched.css'

//we should receive props with the value watched true or false
function FilmWatched(){
    //This value should be replaced by props
    const [watched, setWatched] = useState(false);
    const [hoverWatched, setHoverWatched] = useState(false);

    return(

        //Create a function to change value of watched when the user click the component
        //Add validation and restriction with StarRating
        
        <div className="film-watched-component">
            <label>
                <input
                    type="checkbox"
                    name="watched"
                    onClick={()=>setWatched(true)}
                />
                <FaHeart
                    className="heart"
                    size={20}
                    color={((watched || hoverWatched) === true) ? "#C22F80" : "#e4e5e9"}
                    onMouseEnter = {()=> setHoverWatched(true)}
                    onMouseLeave = {() => setHoverWatched(false)}
                />
            </label>
        </div>
    );
}

export { FilmWatched }

