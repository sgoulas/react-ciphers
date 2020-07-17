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
    const toggleDecryptionButton = renderer.getByTestId(
      "test-toggle-decryption"
    );
    const toggleDescriptionButton = renderer.getByTestId(
      "test-toggle-description"
    );

    return { toggleDecryptionButton, toggleDescriptionButton, ...renderer };
  };

  it("should toggle the cipher decryption on button click", () => {
    const { toggleDecryptionButton } = setup();
    expect(screen.getByTestId("test-encrypted-text")).toBeVisible();
    expect(screen.queryByTestId("test-decrypted-text")).not.toBeInTheDocument();
    fireEvent.click(toggleDecryptionButton);
    expect(screen.queryByTestId("test-encrypted-text")).not.toBeInTheDocument();
    expect(screen.getByTestId("test-decrypted-text")).toBeVisible();
    fireEvent.click(toggleDecryptionButton);
    expect(screen.getByTestId("test-encrypted-text")).toBeVisible();
    expect(screen.queryByTestId("test-decrypted-text")).not.toBeInTheDocument();
  });

  it("should toggle the cipher description on button click", () => {
    const { toggleDescriptionButton } = setup();
    expect(screen.queryByTestId("test-description")).not.toBeInTheDocument();
    fireEvent.click(toggleDescriptionButton);
    expect(screen.getByTestId("test-description")).toBeVisible();
    fireEvent.click(toggleDescriptionButton);
    expect(screen.queryByTestId("test-description")).not.toBeInTheDocument();
  });
});
