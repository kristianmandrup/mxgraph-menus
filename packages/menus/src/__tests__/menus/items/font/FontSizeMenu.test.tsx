import { FontSizeMenu } from "../../../..";
import { editorUi } from "../mocks";

describe("FontSizeMenu", () => {
  const create = () => new FontSizeMenu(editorUi);

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
