import { MenuAdder, Menus } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("ViewZoomMenu", () => {
  const menus = new Menus(editorUi);
  const create = () => new MenuAdder(editorUi, { menus });

  describe("instance", () => {
    let adder;

    beforeEach(() => {
      adder = create();
    });

    it("was created", () => {
      expect(adder).toBeDefined();
    });

    describe("properties", () => {
      describe("$menuItems", () => {
        it("is empty array by default", () => {
          expect(adder.$menuItems.length).toBe(0);
        });
      });
    });

    describe("methods", () => {
      const menu = new Menu(editorUi);
      const name = "A";
      const label = "x";
      const hints = "my hints";
      const keys = ["a"];
      const values = ["1"];

      describe("#setMenuItems", () => {
        it("does not throw", () => {
          expect(() => adder.setMenuItems()).not.toThrow();
        });
      });

      describe("#createMenuPrompt", () => {
        it("does not throw", () => {
          expect(() => adder.createMenuPrompt()).not.toThrow();
        });
      });

      describe("#createMenuStyler", () => {
        it("does not throw", () => {
          expect(() => adder.createMenuStyler()).not.toThrow();
        });
      });

      describe("#styleChange", () => {
        it("does not throw", () => {
          expect(() => adder.styleChange(menu, label, keys, values)).not
            .toThrow();
        });
      });

      describe("#promptChange", () => {
        it("does not throw", () => {
          expect(() => adder.promptChange(menu, label, hints)).not.toThrow();
        });
      });

      describe("#createMenuStyler", () => {
        it("does not throw", () => {
          expect(() => adder.put(name, menu)).not.toThrow();
        });
      });

      describe("#addMenuItems", () => {
        const items = ["ee"];

        it("does not throw", () => {
          expect(() => adder.addMenuItems(menu, items)).not.toThrow();
        });
      });

      describe("#add", () => {
        it("does not throw", () => {
          expect(() => adder.add()).not.toThrow();
        });
      });

      describe("#addSubmenu", () => {
        const node = {};
        it("does not throw", () => {
          expect(() => adder.addSubmenu(label, menu, node)).not.toThrow();
        });
      });

      describe("#addMenuItem", () => {
        const menuItemClass = "d";
        it("does not throw", () => {
          expect(() => adder.addMenuItem(menu, menuItemClass)).not.toThrow();
        });
      });

      describe("#createMenu", () => {
        it("does not throw", () => {
          expect(() => adder.createMenu()).not.toThrow();
        });
      });

      describe("#extraItems", () => {
        it("does not throw", () => {
          expect(() => adder.extraItems(menu)).not.toThrow();
        });
      });

      describe("#menuFunct", () => {
        const funct = () => {};
        const parentElem = document.createElement("x");
        let mainMenu;
        beforeEach(() => {
          mainMenu = new Menu(funct);
        });

        it("does not throw", () => {
          expect(() => adder.menuFunct(mainMenu, parentElem)).not.toThrow();
        });
      });
    });
  });
});
