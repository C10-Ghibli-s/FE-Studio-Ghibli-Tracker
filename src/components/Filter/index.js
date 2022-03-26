/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

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
