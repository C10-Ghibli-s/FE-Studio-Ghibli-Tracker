/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SearchEngine } from "../SearchEngine";

// eslint-disable-next-line no-undef
test("render content", () => {
  const searchQuery = {
    text: "",
  };
  const component = render(<SearchEngine content={searchQuery} />);

  // eslint-disable-next-line no-undef
  expect(component.container).toHaveTextContent(searchQuery.text);
});
