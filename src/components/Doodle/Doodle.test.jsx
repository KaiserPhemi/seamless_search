// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// component
import Doodle from "./Doodle";

// test suite
describe("Doodle component", () => {
  const wrapper = shallow(<Doodle />);

  it("should render component", () => {
    expect(wrapper.find(".doodle-container")).to.exist;
  });

  it("should render image", () => {
    expect(wrapper.find("img")).to.exist;
  });
});
