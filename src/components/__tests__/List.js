import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import List from "../List";
import ListItem from "../ListItem";

configure({ adapter: new Adapter() });

describe("List", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the correct number of elements", () => {
    const items = [
      { name: "Name1", info: "Information1", version: "Version1" },
      { name: "Name2", info: "Information2", version: "Version2" },
      { name: "Name3", info: "Information3", version: "Version3" }
    ];
    const element = shallow(<List items={items} />);
    expect(element.find(ListItem).length).toBe(3);
  });
});
