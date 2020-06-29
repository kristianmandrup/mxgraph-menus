import { InsertTableItem } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("InsertTableItem", () => {
  const create = () => new InsertTableItem(editorUi);

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
      const insertFn = () => {};

      describe("#add", () => {
        it("does not throw", () => {
          expect(() =>
            instance.add(
              menu,
              insertFn,
            )
          ).not
            .toThrow();
        });
      });
    });
  });
});
