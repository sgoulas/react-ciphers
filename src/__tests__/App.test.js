import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Header", () => {
  test('"How it works" link points to the correct page', () => {
    render(<App />);
    screen.debug();
  });
});
