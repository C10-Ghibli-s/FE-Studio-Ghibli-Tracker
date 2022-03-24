import { render } from "react-dom";
import { SearchEngine } from "../SearchEngine";
import React from "react";

test("render content", () => {
  const component = render(<SearchEngine />);
  console.log(component);
});
