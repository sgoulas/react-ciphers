import React from "react";
import renderer from "react-test-renderer";
import CipherCards from "./CipherCards";
import CipherCard from "../CipherCard/CipherCard";

describe("CipherCards suite", () => {
  it("should render 7 <CipherCard /> components", () => {
    const testRenderer = renderer.create(<CipherCards />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(CipherCard).length).toEqual(7);
  });
});
