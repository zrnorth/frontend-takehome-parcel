import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SavedColumn from "../SavedColumn";

configure({ adapter: new Adapter() });

describe("SavedColumn", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SavedColumn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
