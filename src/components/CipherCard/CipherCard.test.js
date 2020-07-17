import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CipherCard from "./CipherCard";

describe("CipherCard suite", () => {
  const setup = () => {
    const cipherCardProps = {
      name: "test",
      description: "test description",
      encrypt: () => {},
      decrypt: () => {},
      keyGenerator: () => {},
    };
    const renderer = render(<CipherCard {...cipherCardProps} />);
    const toggleDescriptionButton = renderer.getByTestId(
      "test-toggle-description"
    );

    return { toggleDescriptionButton, ...renderer };
  };

  it("should toggle the cipher description on button click", () => {
    const { toggleDescriptionButton } = setup();
    expect(screen.queryByTestId("test-description")).not.toBeInTheDocument();
    fireEvent.click(toggleDescriptionButton);
    expect(screen.getByTestId("test-description")).toBeVisible();
    fireEvent.click(toggleDescriptionButton);
    expect(screen.queryByTestId("test-description")).not.toBeInTheDocument();
  });
});
