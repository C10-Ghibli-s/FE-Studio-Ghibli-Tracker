/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Autocomplete } from "../Autocomplete";

const setFilm = jest.fn();
const properties = {
  results: [{ title: "My Neighbor Totoro" }, { title: "Castle in the Sky" }],
};

it("shouldn't render anything if there's not results", () => {
  render(<Autocomplete hidden={true} results={[]} />);
  const list = screen.queryByText("list", {
    Name: "list-results",
  });
  expect(list).not.toBeInTheDocument();
});

it("should render a list and its items if there's elements in results state", () => {
  render(<Autocomplete {...properties} />);
  const list = screen.getByRole("list", {
    Name: "list-results",
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(3);
});

it("should return a value if an item gets clicked", () => {
  render(<Autocomplete {...properties} setFilm={setFilm} />);
  const list = screen.getByRole("list", {
    Name: "list-results",
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  fireEvent.click(items[1], { target: { innerText: "My Neighbor Totoro" } });
  expect(items[1].innerText).toBe("My Neighbor Totoro");
});
