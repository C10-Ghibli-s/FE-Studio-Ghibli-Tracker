import React, { useState, useEffect } from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Facebook } from "../../components/FacebookLogin";
import { Filter } from "../../components/Filter";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import { Menu } from "../../components/Menu";

function Home() {
  // fetch Data
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    setFilms(response.data);
  }, []);

  // Filter state
  const [adjust, setAdjust] = useState("");
  const [categories, setCategories] = useState("");
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggle = () => {
    setToggleFilter(!toggleFilter);
  };
  // Filter engine
  /*  Documentation
    - sortArray calls two arguments category and order
    - initialize categories variable that is an object
    - every propery is an api property as well
    - then another variable that storage an array property
    - initialize a variable that executes the sort
    - this is a validation, if order(argument) is equal to "ascendant"
    - then complement or change the content in films with the sort order
    - else executes same sort with the reverse order
    - at last update the films state with the "sorted" results
  */
  const sortArray = (category, order) => {
    const categories = {
      running_time: "running_time",
      release_date: "release_date",
      rt_score: "rt_score",
    };
    const sortProperty = categories[category];
    const sorted =
      order === "ascendant"
        ? [...films].sort((a, b) => b[sortProperty] - a[sortProperty])
        : [...films].sort((a, b) => a[sortProperty] - b[sortProperty]);

    setFilms(sorted);
  };
  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchEngine />
        <span
          style={{ margin: "5px", cursor: "pointer", zIndex: 1 }}
          onClick={handleToggle}
        >
          <FaFilter style={{ verticalAlign: "middle" }} />
        </span>
      </div>
      {!!toggleFilter && (
        <Filter
          sortArray={sortArray}
          adjust={adjust}
          setAdjust={setAdjust}
          categories={categories}
          setCategories={setCategories}
          films={films}
          setFilms={setFilms}
        />
      )}
      {/*<div>
        <HomeFilmCard />
      </div>*/}
      <div>
        {films.map((item) => (
          <div
            style={{ margin: "30px", border: "1px solid black" }}
            key={item.id}
          >
            <h4>{item.title}</h4>
            <p>Date: {item.release_date}</p>
            <p>Running Time: {item.running_time}</p>
            <p>Score: {item.rt_score}</p>
          </div>
        ))}
      </div>
      <div>
        <Facebook />
      </div>
    </>
  );
}

export { Home };
