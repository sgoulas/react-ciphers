import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import TextInput from "../components/TextInput/TextInput";

describe("TextInput suite", () => {
  it("renders correctly", () => {
    const textInput = renderer
      .create(<TextInput text="" setText={() => {}} />)
      .toJSON();

    expect(textInput).toMatchSnapshot();
  });

  xit("gets focused on click", () => {
    render(<TextInput />);
    const input = screen.getByTestId("plain-text-input");
    screen.debug();
    userEvent.click(input);
    screen.debug();
  });
});
