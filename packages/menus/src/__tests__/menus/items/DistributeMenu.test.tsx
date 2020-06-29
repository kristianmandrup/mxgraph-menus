import { Menu, DistributeMenu } from "../../..";
import { editorUi } from "../mocks";

describe("DistributeMenu", () => {
  const create = () => new DistributeMenu(editorUi);
  const createMenu = (funct) => new Menu(editorUi, funct);

  describe("instance", () => {
    let menu;

    beforeEach(() => {
      menu = create();
    });

    it("was created", () => {
      expect(menu).toBeDefined();
    });

    describe.skip("properties", () => {
    });

    describe("methods", () => {
      describe("#add", () => {
        it("does not throw", () => {
          expect(() => menu.add()).not.toThrow();
        });
      });

      describe("#menuFunct", () => {
        const funct = () => {};
        const parentElem = document.createElement("x");
        let mainMenu;
        beforeEach(() => {
          mainMenu = createMenu(funct);
        });

        it("does not throw", () => {
          expect(() => menu.menuFunct(mainMenu, parentElem)).not.toThrow();
        });
      });
    });
  });
});
