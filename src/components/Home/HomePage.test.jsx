// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// components
import HomePage from "./HomePage";

// test suite
describe("HomePage component", () => {
  const wrapper = shallow(<HomePage />);

  it("should render home page container", () => {
    expect(wrapper.find(".main-page")).to.exist;
  });
});
