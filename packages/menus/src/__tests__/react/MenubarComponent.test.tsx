import React from "react";
import { MenubarComponent } from "./MenubarComponent";
import renderer from "react-test-renderer";

describe("Menubar", () => {
  it("is a menubar", () => {
    const component = renderer.create(<MenubarComponent></MenubarComponent>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
