import { Menu, HorizontalFlowItem } from "../../../..";
import { editorUi } from "../mocks";

describe("HorizontalFlowItem", () => {
  const menuFunct = () => {};
  const menu = new Menu(editorUi, menuFunct);
  const create = () => new HorizontalFlowItem(menu);

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
