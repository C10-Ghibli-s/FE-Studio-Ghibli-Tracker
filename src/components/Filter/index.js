/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Filter-dropdown.scss";

const filterFrom = {opacity: 0, y:40};
const filterTo = {opacity: 1, y: 60};

function Filter({ films, setFilms }) {
  const [adjust, setAdjust] = useState("ascendant");
  const [categories, setCategories] = useState("duration");

  /*  sortArray Function
    - sortArray receives two arguments 'category' and 'order'.
    - Then initialize the variable "categories" which is an object.
    - Every property is a property of the API as well
    - Then another variable is initialized "sortProperty" that storages the "categories" properties
    - Then initialize a variable "sorted" that executes the sort
    - This is a validation if order(argument) is equal to "ascendant"
    - Then complement or change the content in "films" state with the .sort order
    - Else executes the same .sort with the reverse order
    - At the last, update the "films" state with the "sorted" results
  */

  const sortArray = (category, order) => {
    const categories = {
      duration: "duration",
      releaseDate: "releaseDate",
      audienceScore: "audienceScore",
      //this fields belong to Interactions entity. They are related to Movies entity.
      //score_by_stars: "score_by_stars",
      //score_by_emoji: "score_by_emoji",
    };
    
    const sortProperty = categories[category];
    const sorted =
      order === "ascendant"
        ? [...films].sort((a, b) => b[sortProperty] - a[sortProperty])
        : [...films].sort((a, b) => a[sortProperty] - b[sortProperty]);

    setFilms(sorted);
  };
  return (
    <motion.div 
      initial={filterFrom} 
      animate={filterTo} 
      transition={{delay: 0.1}}
      className="filter-container">
        <label
          className="filter--label"
          aria-labelledby="filter-label"
          onClick={() => sortArray(categories, adjust)}
        >
          <p className="select--text">Sort by:</p>
          <select
            onChange={(e) => {
              setCategories(e.target.value);
            }}
            className="select"
          >
            <option value="duration">Duration</option>
            <option value="releaseDate">Year</option>
            <option value="audienceScore">Audience Score</option>
            {/**
             * <option value="score_by_stars">Users Rate</option>
              <option value="score_by_emoji">Emojis Rate</option>
             */
            }  
            
          </select>
          <p className="select--text">Order:</p>
          <select
            onChange={(e) => {
              setAdjust(e.target.value);
            }}
            className="select"
          >
            <option value="ascendant">Ascendant</option>
            <option value="descendant">Descendant</option>
          </select>
        </label>
    </motion.div>
  );
}

export { Filter };
