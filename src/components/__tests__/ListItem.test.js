import React from "react";
import ReactDOM from "react-dom";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ListItem from "../ListItem";

configure({ adapter: new Adapter() });

describe("ListItem", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("skips rendering a button if there is no button action defined", () => {
    const buttonType = {
      color: "red",
      icon: "arrow"
    };
    const element = shallow(
      <ListItem
        name="testName"
        info="info"
        version="0.1"
        buttonType={buttonType}
      />
    );
    expect(element.find("button").exists()).toEqual(false);
  });

  it("renders a button with default color and icon if there is an action defined", () => {
    const buttonType = {
      action: () => console.log("Hey!")
    };
    const element = shallow(
      <ListItem
        name="testName"
        info="info"
        version="0.1"
        buttonType={buttonType}
      />
    );
    expect(element.find("button").exists()).toEqual(true);
  });

  it("renders like normal if all buttonType elements are defined", () => {
    const buttonType = {
      action: () => console.log("Hey!"),
      color: "red",
      icon: "arrow"
    };
    const element = shallow(
      <ListItem
        name="testName"
        info="info"
        version="0.1"
        buttonType={buttonType}
      />
    );
    expect(element.find("button").exists()).toEqual(true);
  });
});
