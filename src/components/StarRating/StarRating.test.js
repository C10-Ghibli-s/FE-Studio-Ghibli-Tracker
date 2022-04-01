/**
 * @jest-environment jsdom
 */

 import React from "react";
 import "@testing-library/jest-dom/extend-expect";
 import { render } from "@testing-library/react";
 import { StarRating } from "../StarRating";
 
 // eslint-disable-next-line no-undef
 test("render content", () => {
   const component = render(<StarRating />);
 
   // eslint-disable-next-line no-undef
   expect(component.container);
 });
 