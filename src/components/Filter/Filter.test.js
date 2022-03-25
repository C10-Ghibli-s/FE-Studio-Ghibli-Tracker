/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Filter } from "../Filter";

// eslint-disable-next-line no-undef
test("render content", () => {
  render(<Filter />);
  // eslint-disable-next-line no-undef
});
