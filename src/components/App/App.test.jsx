// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// component
import App from "../App/App";

// test suites
describe("App component", () => {
  const wrapper = shallow(<App />);

  it("should render main container", () => {
    expect(wrapper.find(".main-app")).to.exist;
  });

  it("should render child components", () => {
    expect(wrapper.find(".navbar")).to.exist;
    expect(wrapper.find(".page-footer")).to.exist;
  });
});
