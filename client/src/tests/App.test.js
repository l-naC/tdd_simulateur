import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

/* test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
 */

test("Server is working", () => {
    const App = renderer.create(
        <App/>
    )
    let tree = App.JSON();
    expect(tree).toMatchSnapshot();
})