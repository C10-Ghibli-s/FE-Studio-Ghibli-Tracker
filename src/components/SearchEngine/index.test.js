import { renderer } from "react-test-renderer";
import { SearchEngine } from "../SearchEngine";
import test from "jest";
import React from "react";

test("render content", () => {
  const component = renderer(<SearchEngine />);
  console.log(component);
});
