/**
 * @jest-environment jsdom
 */

 import React from "react";
 import "@testing-library/jest-dom/extend-expect";
 import { render } from "@testing-library/react";
 import { DoubleRating } from "../DoubleRating";
 
 // eslint-disable-next-line no-undef
 test("render content", () => {
   const component = render(<DoubleRating />);
 
   // eslint-disable-next-line no-undef
   expect(component.container);
 });