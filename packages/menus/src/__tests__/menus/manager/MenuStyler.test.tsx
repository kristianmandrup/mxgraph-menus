import { MenuStyler } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("MenuStyler", () => {
  const create = () => new MenuStyler(editorUi);

  describe("instance", () => {
    let instance;

    beforeEach(() => {
      instance = create();
    });

    it("was created", () => {
      expect(instance).toBeDefined();
    });

    describe("properties", () => {
    });

    describe("methods", () => {
      const menu = new Menu(editorUi);
      const label = "x";
      const keys = ["a", "b"];
      const values = ["1", "2"];
      const sprite = "show";
      const parent = document.createElement("x");
      const fn = () => {};
      const post = () => {};

      describe("#add", () => {
        it("does not throw", () => {
          expect(() =>
            instance.add(
              menu,
              label,
              keys,
              values,
              sprite,
              parent,
              fn,
              post,
            )
          ).not
            .toThrow();
        });
      });

      describe("#createStyleChangeFunction", () => {
        it("does not throw", () => {
          expect(() => instance.createStyleChangeFunction(keys, values)).not
            .toThrow();
        });
      });

      describe("#toggleStyle", () => {
        it("does not throw", () => {
          const key = "x";
          const defaultValue = "x";
          expect(() => instance.toggleStyle(key, defaultValue)).not.toThrow();
        });
      });
    });
  });
});
