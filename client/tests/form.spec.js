import React from "react";
import renderer from "react-test-renderer";
import SimulatorForm from "./../src/components/SimulatorForm"

test("Form rendering", () => {
  const component = renderer
    .create(
      <SimulatorForm></SimulatorForm>
    );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//let wrapper;

// test("Birth year check", () => {
//     wrapper = shallow(<SimulatorForm />);
//   wrapper
//     .find('input[type="text"]')
//     .simulate("change", {
//       target: { name: "username", value: "krishankantsinghal" },
//     });
//   expect(wrapper.state("username")).toEqual("krishankantsinghal");
// });
