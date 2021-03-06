import { Menu, HelpMenu } from "../../..";
import { editorUi } from "../mocks";

describe("HelpMenu", () => {
  const create = () => new HelpMenu(editorUi);
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

        it("first item is 'help'", () => {
          expect(menu.$menuItems[0]).toEqual("help");
        });

        it("last item is 'about'", () => {
          const len = menu.$menuItems.length;
          expect(menu.$menuItems[len - 1]).toEqual("about");
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
