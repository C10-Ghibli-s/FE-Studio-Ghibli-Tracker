/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, within } from "@testing-library/react";
import { Autocomplete } from "../Autocomplete";

// eslint-disable-next-line no-undef
test("render content", () => {
  const properties = {
    results: [{ title: "My Neighbor Totoro" }, { title: "Castle in the Sky" }],
    searchQuery: "totoro",
    setFilm: ["My Neighbor Totoro"],
    setResults: [],
  };
  const element = render(<Autocomplete {...properties} />);
  screen.debug();
  expect(element.container).toBeInTheDocument();
});

test("should render a list and its items", () => {
  const properties = {
    results: [{ title: "My Neighbor Totoro" }, { title: "Castle in the Sky" }],
    searchQuery: "totoro",
    setFilm: ["My Neighbor Totoro"],
    setResults: [],
  };
  render(<Autocomplete {...properties} />);

  const list = screen.getByRole("list", {
    Name: "list-results",
  });

  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(2);
});
