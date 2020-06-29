import { Menu, VerticalTreeItem } from "../../../..";
import { editorUi } from "../mocks";

describe("VerticalTreeItem", () => {
  const menuFunct = () => {};
  const menu = new Menu(editorUi, menuFunct);
  const create = () => new VerticalTreeItem(menu);

  describe("instance", () => {
    let item;

    beforeEach(() => {
      item = create();
    });

    it("was created", () => {
      expect(item).toBeDefined();
    });

    describe("methods", () => {
      describe("#add", () => {
        it("does not throw", () => {
          expect(() => item.add()).not.toThrow();
        });
      });
    });
  });
});
