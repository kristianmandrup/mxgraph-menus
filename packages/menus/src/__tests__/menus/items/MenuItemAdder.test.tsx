import { MenuItemAdder, Menus } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("ViewZoomMenu", () => {
  const $menu = new Menu(editorUi);
  const create = (menu = $menu) => new MenuItemAdder(editorUi, menu);
  const graph = editorUi.editor.graph;

  describe("instance", () => {
    let adder;

    beforeEach(() => {
      adder = create();
    });

    it("was created", () => {
      expect(adder).toBeDefined();
    });

    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(adder.editorUi).toBe(editorUi);
        });
      });

      describe("menu", () => {
        it("is set", () => {
          expect(adder.menu).toBe($menu);
        });
      });

      describe("graph", () => {
        it("is set", () => {
          expect(adder.graph).toBe(graph);
        });
      });
    });

    describe("methods", () => {
      const submenu = new Menu(editorUi);
      const item = "x";
      const fn = () => {};
      const node = {};

      describe("#setMenuItems", () => {
        it("does not throw", () => {
          expect(() => adder.addItem(item, submenu, fn, node)).not.toThrow();
        });
      });

      describe("#promptSpacing", () => {
        it("does not throw", () => {
          const defaultValue = "x";
          expect(() => adder.promptSpacing(defaultValue, fn)).not.toThrow();
        });
      });
    });
  });
});
