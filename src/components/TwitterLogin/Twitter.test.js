/**
 * @jest-environment jsdom
 */

 import React from "react";
 import "@testing-library/jest-dom/extend-expect";
 import { render, screen } from "@testing-library/react";
 import { Twitter } from ".";
 
/*const MockTwitter = ()=>{
  return(
    <Twitter>
      <TwitterLogin/>
    </Twitter>
  )
}*/

 // eslint-disable-next-line no-undef
 test("render content Twitter", () => {
   render(
       <Twitter/>
   );
   const button = screen.getByText(/Register with Twitter/i)

   expect(button).toBeInTheDocument();
 
   // eslint-disable-next-line no-undef
   //expect(component.container);
 });

