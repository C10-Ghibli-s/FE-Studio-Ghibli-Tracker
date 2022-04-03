/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { Filter } from "../Filter";

const mockedSortArray = jest.fn;

describe("Rendering component", () => {
  it("should gives the value of the option 'Rate' and 'Ascendant' select when it's clicked", () => {
    render(<Filter sortArray={mockedSortArray} />);
    const rateElement = screen.getByText(/rate/i);
    const ascendantOption = screen.getByText(/ascendant/i);

    fireEvent.click(rateElement);
    fireEvent.click(ascendantOption);

    expect(rateElement.value).toBe("rt_score");
    expect(ascendantOption.value).toBe("ascendant");
  });

  it("should gives the value of the option 'Duration' and 'Descendant' select when it's clicked", () => {
    render(<Filter sortArray={mockedSortArray} />);
    const time = screen.getByText(/duration/i);
    const descOpt = screen.getByText(/descendant/i);

    fireEvent.click(time);
    fireEvent.click(descOpt);

    expect(time.value).toBe("running_time");
    expect(descOpt.value).toBe("descendant");
  });
});
