/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchEngine } from "../SearchEngine";

// Render and see the component
// Receives the value that is write in itself.
// After I write something I received something
const setResults = jest.fn();
const onBlur = jest.fn();

describe("testing the search bar", () => {
  it("renders the input with label title of the search bar", () => {
    render(
      <SearchEngine
        setResults={setResults}
        onBlur={onBlur}
        searchQuery={"My Neighbor Totoro"}
        handleInput={() => {}}
      />
    );
    const input = screen.getByPlaceholderText(
      "What movie are you looking for?"
    );
    expect(input).toBeInTheDocument();
  });
  it("should take the value of the input", () => {
    render(<SearchEngine setResults={setResults} onBlur={onBlur} />);
    const input = screen.getByPlaceholderText(
      "What movie are you looking for?"
    );
    fireEvent.change(input, { target: { value: "My Neighbor Totoro" } });
    expect(input.value).toBe("My Neighbor Totoro");
  });

  it("should received a response after write something", () => {
    render(
      <SearchEngine
        searchQuery={["My Neighbor Totoro"]}
        setResults={setResults}
        onBlur={onBlur}
      />
    );

    const input = screen.getByPlaceholderText(
      "What movie are you looking for?"
    );
    fireEvent.change(input, { target: { value: "My Neighbor Totoro" } });
    expect(input.value).toBe("My Neighbor Totoro");
  });

  it("should not received anything if there's nothing written", () => {
    render(
      <SearchEngine searchQuery={[]} setResults={setResults} onBlur={onBlur} />
    );

    const input = screen.getByPlaceholderText(
      "What movie are you looking for?"
    );
    fireEvent.change(input);
    expect(input.value).not.toBe("My Neighbor Totoro");
  });
});
