import { Menu, EditMenu } from "../../..";
import { editorUi } from "../mocks";

describe("EditMenu", () => {
  const create = () => new EditMenu(editorUi);
  const createMenu = (funct) => new Menu(editorUi, funct);

  describe("instance", () => {
    let menu;

    beforeEach(() => {
      menu = create();
    });

    it("was created", () => {
      expect(menu).toBeDefined();
    });

    describe("properties", () => {
      describe("$menuItems", () => {
        it("is non-empty array", () => {
          expect(menu.$menuItems.length).toBeGreaterThan(0);
        });

        it("first item is 'undo'", () => {
          expect(menu.$menuItems[0]).toEqual("undo");
        });

        it("last item is 'lockUnlock'", () => {
          const len = menu.$menuItems.length;
          expect(menu.$menuItems[len - 1]).toEqual("lockUnlock");
        });
      });
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
