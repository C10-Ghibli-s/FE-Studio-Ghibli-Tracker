/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Register } from "../Register";

it("should give a user and password field", () => {
  render(<Register />);
  const user = screen.getByText(/user/i);
  const password = screen.getByText(/password/i);
  expect(user).toBe("User");
  expect(password).toBe("Password");
});

it("should render a button", () => {
  render(<Register />);
  const registerButton = screen.getByText(/register/i);
  expect(registerButton).toBeInTheDocument();
});
