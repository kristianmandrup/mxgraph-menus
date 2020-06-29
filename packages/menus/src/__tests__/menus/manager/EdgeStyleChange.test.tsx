import { EdgeStyleChange } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("EdgeStyleChange", () => {
  const create = () => new EdgeStyleChange(editorUi);

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
      const reset = true;

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
              reset,
            )
          ).not
            .toThrow();
        });
      });
    });
  });
});
