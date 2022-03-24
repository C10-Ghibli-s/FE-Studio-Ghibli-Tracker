/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { App } from "../App";

// eslint-disable-next-line no-undef
test("render content", () => {
  render(<App />);
});
