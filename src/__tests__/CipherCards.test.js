import React from "react";
import { render, screen } from "@testing-library/react";
import CipherCards from "../components/CipherCards/CipherCards";

xdescribe("CipherCards suite", () => {
  it("should render", () => {
    render(<CipherCards />);
    screen.debug();
  });
});
