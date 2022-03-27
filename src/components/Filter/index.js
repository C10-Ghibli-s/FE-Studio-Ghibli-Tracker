/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./Filter-dropdown.scss";

function Filter({ sortArray, setAdjust, adjust, categories, setCategories }) {
  return (
    <>
      <div className="filter-properties">
        <h4 style={{ margin: "4px" }}>Filter</h4>
        <label
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => sortArray(categories, adjust)}
        >
          <select
            onChange={(e) => {
              setCategories(e.target.value);
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="running_time">Duration</option>
            <option value="rt_score">Rate</option>
            <option value="release_date">Year</option>
          </select>
          <select
            onChange={(e) => {
              setAdjust(e.target.value);
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="ascendant">Ascendant</option>
            <option value="descendant">Descendant</option>
          </select>
        </label>
      </div>
    </>
  );
}

export { Filter };
