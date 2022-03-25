import React from "react";
import "./App.scss";
import { SearchEngine } from "../SearchEngine";
import { Filter } from "../Filter";

function App() {
  return (
    <>
      <SearchEngine />
      <Filter />
    </>
  );
}

export { App };
