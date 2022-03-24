/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Autocomplete } from "../Autocomplete";

// eslint-disable-next-line no-undef
test("render content", () => {
  const results = {
    content: [],
  };

  render(<Autocomplete results={results.content} />);
});
