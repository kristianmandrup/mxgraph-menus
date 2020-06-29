import { MenuItems } from "../..";
import { editorUi } from "../mocks";

describe("MenuItems", () => {
  const menus = {};
  const create = (menus) => new MenuItems(editorUi, menus);

  describe("instance", () => {
    let instance;

    beforeEach(() => {
      instance = create(menus);
    });

    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(editorUi);
        });
      });

      describe("menus", () => {
        it("is set", () => {
          expect(instance.menus).toBe(menus);
        });
      });

      describe("items", () => {
        it("non-empty array", () => {
          expect(instance.items.length).toBeGreaterThan(0);
        });
      });

      describe("menuItems", () => {
        it("non-empty array", () => {
          expect(instance.menuItems.length).toBeGreaterThan(0);
        });
      });
    });

    describe("methods", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(() => instance.addToMenu()).not.toThrow();
        });
      });
    });
  });
});
