import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import GroceryApp from "./GroceryApp";
import { shallow } from "enzyme";
import GroceryItemlist from "./GroceryItemsList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GroceryApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("GroceryApp renders header", () => {
  const wrapper = shallow(<GroceryApp />);
  const header = <h1>Grocery List</h1>;

  expect(wrapper.contains(header)).toEqual(true);
});
it("GroceryItemList: renders correctly", () => {
  const testData = [{ id: 1, name: "sss", upvote: 1, downvote: 2 }];
  const component = shallow(<GroceryItemlist Gitems={testData} />);

  expect(component.find(".list-group").length);
});
