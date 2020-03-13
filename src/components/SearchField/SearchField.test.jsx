// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// component
import SearchField from "./SearchField";

// test suites
describe("SearchField component", () => {
  const wrapper = shallow(<SearchField />);

  it("should render main search field container", () => {
    expect(wrapper.find(".search-form")).to.exist;
    expect(wrapper.find("form")).to.exist;
  });

  it("should render the input field", () => {
    expect(wrapper.find(".search-query")).to.exist;
  });
});
