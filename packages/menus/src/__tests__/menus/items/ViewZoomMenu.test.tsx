import { ViewZoomMenu } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("ViewZoomMenu", () => {
  const create = () => new ViewZoomMenu(editorUi);
  const createMenu = (funct?) => new Menu(editorUi, funct);

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

        it("first item is a '-'", () => {
          expect(menu.$menuItems[0]).toEqual("-");
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
