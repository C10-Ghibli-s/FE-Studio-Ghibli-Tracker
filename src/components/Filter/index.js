import React, { useState } from "react";
import { useGetData } from "../../useGetData";

function Filter() {
  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false);
  const data = useGetData("https://ghibliapi.herokuapp.com/films");

  const handleFilter = (e, order, param) => {
    data.filter((item, param) => {
      return param === item.release_date;
    });
  };

  return (
    <>
      <span
        onClick={() => {
          setOpen(!open);
        }}
      >
        Filter
      </span>
      {!!open && (
        <div>
          <ul>
            <li>
              Filter by: <span>Date</span>
            </li>
            <li>
              Filter by: <span>Running Date</span>
            </li>
            <li>
              Filter by: <span>Audience Score</span>
            </li>
            <li>
              Order: <span>Ascendant</span>
              <label htmlFor="">
                <input type="checkbox" />
              </label>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export { Filter };
