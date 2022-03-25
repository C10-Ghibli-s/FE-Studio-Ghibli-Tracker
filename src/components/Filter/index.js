import React, { useState } from "react";
import { useGetData } from "../../useGetData";

function Filter() {
  const [item, setItem] = useState;
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
          return <div>This is the filter</div>;
        }}
      >
        Filter
      </span>
    </>
  );
}

export { Filter };
