/**
 * @jest-environment jsdom
 */

 import React from "react";
 import "@testing-library/jest-dom/extend-expect";
 import { render, screen } from "@testing-library/react";
 import TestRenderer from 'react-test-renderer';
 import { Facebook } from "../FacebookLogin";
import { FacebookLogin } from "react-facebook-login/dist/facebook-login-render-props";
 
/*const MockFacebook = ()=>{
  return(
    <Facebook>
      <FacebookLogin/>
    </Facebook>
  )
}*/

 // eslint-disable-next-line no-undef
 test("render content facebook", () => {
   render(
       <Facebook/>
   );
   const button = screen.getByText(/Register with Facebook/i)

   expect(button).toBeInTheDocument();
 
   // eslint-disable-next-line no-undef
   //expect(component.container);
 });

