import React from "react";
import renderer from "react-test-renderer";
import TextInput from "../components/TextInput/TextInput";

describe("TextInput suite", () => {
  it("renders correctly", () => {
    const textInput = renderer
      .create(<TextInput text="" setText={() => {}} />)
      .toJSON();

    expect(textInput).toMatchSnapshot();
  });
});
