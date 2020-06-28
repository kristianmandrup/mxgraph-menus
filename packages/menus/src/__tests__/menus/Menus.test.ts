// import { MenubarComponent } from "./MenubarComponent";
// import renderer from "react-test-renderer";
import { Menus } from "../../Menus";
import { editorUi } from "../mocks";

describe("Menus", () => {
  const create = () => new Menus(editorUi);

  describe("init", () => {
    const menus = create();
    menus.init();

    it("must have menus", () => {
      expect(menus.menus).not.toBeUndefined();
    });
  });
});
