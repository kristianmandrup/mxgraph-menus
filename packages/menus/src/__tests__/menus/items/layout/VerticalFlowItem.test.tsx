import { Menu, VerticalFlowItem } from "../../../..";
import { editorUi } from "../mocks";

describe("VerticalFlowItem", () => {
  const menuFunct = () => {};
  const menu = new Menu(editorUi, menuFunct);
  const create = () => new VerticalFlowItem(menu);

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
