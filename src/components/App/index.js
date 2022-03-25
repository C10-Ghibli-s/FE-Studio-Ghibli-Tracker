import React, { useEffect, useState } from "react";
import "./App.scss";
import { SearchEngine } from "../SearchEngine";
import { Filter } from "../Filter";

import { useGetData } from "../../useGetData";

const divStyle = {
  margin: "20px",
};

function App() {
  const [films, setFilms] = useState([]);
  const data = useGetData("https://ghibliapi.herokuapp.com/films");

  useEffect(async () => {
    setFilms(data);
  });

  return (
    <>
      <SearchEngine />
      <Filter films={films} setFilms={setFilms} />
      {/* test */}
      <div>
        {films.map((item, index) => (
          <div style={divStyle} key={index}>
            <h4>{item.title}</h4>
            <p>Date: {item.release_date}</p>
            <p>Running Time: {item.running_time}</p>
            <p>Score: {item.rt_score}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export { App };
