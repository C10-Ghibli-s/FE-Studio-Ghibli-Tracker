/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Home } from ".";

// eslint-disable-next-line no-undef
test("render Home component", () => {
  render(<Home />);
});
