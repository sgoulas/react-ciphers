import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import TextInput from "../components/TextInput/TextInput";

describe("TextInput suite", () => {
  const setup = () => {
    const renderer = render(<TextInput updateUserInputCallback={() => {}} />);
    const textInput = renderer.getByTestId("plain-text-input");

    return {
      textInput,
      ...renderer,
    };
  };

  it("renders correctly", () => {
    const textInput = renderer
      .create(<TextInput updateUserInputCallback={() => {}} />)
      .toJSON();

    expect(textInput).toMatchSnapshot();
  });

  it("should accept a user input", () => {
    const { textInput } = setup();
    fireEvent.change(textInput, { target: { value: "this is a test input" } });
    expect(textInput.value).toBe("this is a test input");
  });
});
