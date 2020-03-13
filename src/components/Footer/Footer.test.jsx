// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// components
import Footer from "./Footer";

// test suites
describe("Footer component", () => {
  const wrapper = shallow(<Footer />);

  it("should render footer container", () => {
    expect(wrapper.find(".def-layout")).to.exist;
  });
});
