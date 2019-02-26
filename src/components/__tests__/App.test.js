import React from "react";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import ListItem from "../ListItem";

configure({ adapter: new Adapter() });

// Browser mock for localstorage. https://github.com/facebook/jest/issues/2098
const localStorageMock = (function() {
  const store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("correctly gets state from localStorage", () => {
    const ls = {
      Name1: { info: "Information1", version: "Version1" },
      Name2: { info: "Information2", version: "Version2" }
    };

    localStorage.setItem("savedItems", JSON.stringify(ls));

    const element = mount(<App />);
    expect(element.find(ListItem).length).toBe(2);
  });
});
