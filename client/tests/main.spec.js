import React from "react";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<div><div className="App"></div></div>).toJSON();
});