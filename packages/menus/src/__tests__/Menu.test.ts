// import { MenubarComponent } from "./MenubarComponent";
// import renderer from "react-test-renderer";
import { Menu } from "../Menu";

describe("Menu", () => {
  const create = (enabled = false) => new Menu(funct, enabled);
  const funct = () => {};
  const parent = {};

  describe("setEnabled", () => {
    const menu = create(false);
    menu.setEnabled(true);

    it("must be enabled", () => {
      expect(menu.enabled).toBeTruthy();
    });
  });

  describe("execute", () => {
    const menu = create(false);
    menu.execute(funct, parent);
  });
});
