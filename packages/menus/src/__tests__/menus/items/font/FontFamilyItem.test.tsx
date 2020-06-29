import { Menu, FontFamilyItem } from "../../../..";
import { editorUi } from "../mocks";

describe("FontFamilyItem", () => {
  const menuFunct = () => {};
  const menu = new Menu(editorUi, menuFunct);
  const create = () => new FontFamilyItem(menu);

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
