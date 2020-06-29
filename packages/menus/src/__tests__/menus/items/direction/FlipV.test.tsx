import { Menu, FlipVerticalItem } from "../../../..";
import { editorUi } from "../mocks";

describe("FlipV", () => {
  const menu = new Menu(editorUi);
  const create = () => new FlipVerticalItem(menu);

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
