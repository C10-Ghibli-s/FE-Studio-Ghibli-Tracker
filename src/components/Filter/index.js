/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

/* Making a Filter
  - must filter parameters
  - 

*/
const spanStyle = {
  position: "relative",
};

const filterStyles = {
  background: "white",
  left: "200px",
};

function Filter({ setFilms, films }) {
  const [open, setOpen] = useState(false);
  const [isAscendant, setIsAscendant] = useState(false);
  const [runningTime, setIsRunningTime] = useState(false);
  const [score, setScore] = useState(false);
  const [isDate, setIsDate] = useState(false);

  // console.log("is ascendant", isAscendant);
  // console.log("running time", runningTime);
  // console.log("score", score);
  // console.log("is date", isDate);

  const handleRunningTime = () => {
    if (runningTime) {
      if (isAscendant) {
        films.sort((a, b) => {
          return b.running_time - a.running_time;
        });
        return films;
      } else {
        films.sort((a, b) => {
          return a.running_time - b.running_time;
        });
        return films;
      }
    }
    return null;
  };

  console.log(films);

  return (
    <>
      <span
        style={spanStyle}
        onClick={() => {
          setOpen(!open);
        }}
      >
        Filter
      </span>
      {!!open && (
        <div>
          <ul style={filterStyles}>
            <li>
              Filter: <span>Date</span>
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    let isChecked = e.target.checked;
                    setIsDate(isChecked);
                  }}
                />
              </label>
            </li>
            <li>
              Filter: <span>Running Time</span>
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    let isChecked = e.target.checked;
                    setIsRunningTime(isChecked);
                  }}
                />
              </label>
            </li>
            <li>
              Filter: <span>Score</span>
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    let isChecked = e.target.checked;
                    setScore(isChecked);
                  }}
                />
              </label>
            </li>
            <li>
              Order: <span>Ascendant</span>
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    let isChecked = e.target.checked;
                    setIsAscendant(isChecked);
                  }}
                />
              </label>
            </li>
            <button
              onClick={() => {
                handleRunningTime;
              }}
            >
              Send
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

export { Filter };
