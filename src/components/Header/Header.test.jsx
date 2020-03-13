// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// components
import Header from "./Header";

// test suites
describe("Header component", () => {
  const wrapper = shallow(<Header />);
  it("should render navigation links", () => {
    expect(wrapper.find("nav")).length.to.exist;
  });
});
