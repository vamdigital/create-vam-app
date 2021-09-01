import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders hey", () => {
  render(<App />);
  const linkElement = screen.getByText(/hey/i);
  expect(linkElement).toBeInTheDocument();
});
