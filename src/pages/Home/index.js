import React from "react";
import { SearchEngine } from "../../components/SearchEngine";
import { Filter } from "../../components/Filter";

function Home() {
  return (
    <>
      <SearchEngine />
      <Filter />
    </>
  );
}

export { Home };
