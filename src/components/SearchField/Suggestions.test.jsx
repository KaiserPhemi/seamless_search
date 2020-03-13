// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// component
import Suggestions from "./Suggestions";

// test suite
describe("Suggestions container", () => {
  const wrapper = shallow(<Suggestions />);

  it("should render compnent", () => {
    expect(wrapper.find(".list-wrapper")).to.exist;
  });
});
