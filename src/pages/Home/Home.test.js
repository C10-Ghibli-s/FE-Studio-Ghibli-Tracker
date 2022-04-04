/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Home } from ".";

// eslint-disable-next-line no-undef
test("render Home component", async () => {
  render(<Home />);
  const element = await screen.findByText("Castle in the Sky");
  expect(element).toBeInTheDocument();
});
