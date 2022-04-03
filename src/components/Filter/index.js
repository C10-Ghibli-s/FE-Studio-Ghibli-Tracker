/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./Filter-dropdown.scss";

function Filter({ sortArray, setAdjust, adjust, categories, setCategories }) {
  return (
    <>
      <div className="filter-properties">
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 30px",
          }}
          aria-labelledby="filter-label"
          onClick={() => sortArray(categories, adjust)}
        >
          <p style={{ margin: "5px" }}>Sort by:</p>
          <select
            onChange={(e) => {
              setCategories(e.target.value);
            }}
            className="select-categories"
          >
            <option value="running_time">Duration</option>
            <option value="rt_score">Rate</option>
            <option value="release_date">Year</option>
          </select>
          <p style={{ margin: "5px" }}>Order:</p>
          <select
            onChange={(e) => {
              setAdjust(e.target.value);
            }}
            className="select-order"
          >
            <option value="ascendant">Ascendant</option>
            <option value="descendant">Descendant</option>
          </select>
        </label>
      </div>
    </>
  );
}

export { Filter };
