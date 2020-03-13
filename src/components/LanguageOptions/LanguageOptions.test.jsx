// react libraries
import React from "react";

// third-party libraries
import { expect } from "chai";
import { shallow } from "enzyme";

// component
import LanguageOptions from "./LanguageOptions";

describe("LanguageOptions component", () => {
  const wrapper = shallow(<LanguageOptions />);

  it("should render the language options container", () => {
    expect(wrapper.find(".lang-options")).to.exist;
  });

  it("should render all options stated", () => {
    expect(wrapper.find("span")).to.have.lengthOf(5);
  });
});
