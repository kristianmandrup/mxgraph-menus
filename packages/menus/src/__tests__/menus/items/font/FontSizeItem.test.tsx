import { Menu, FontSizeItem } from "../../../..";
import { editorUi } from "../mocks";

describe("FontSizeItem", () => {
  const menuFunct = () => {};
  const menu = new Menu(editorUi, menuFunct);
  const create = () => new FontSizeItem(menu);

  describe("instance", () => {
    let item;

    beforeEach(() => {
      item = create();
    });

    it("was created", () => {
      expect(item).toBeDefined();
    });

    describe("methods", () => {
      describe("#addItem", () => {
        it("does not throw", () => {
          expect(() => item.addItem()).not.toThrow();
        });
      });
    });
  });
});
