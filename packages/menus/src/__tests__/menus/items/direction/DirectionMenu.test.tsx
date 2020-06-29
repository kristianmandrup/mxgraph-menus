import { DirectionMenu } from "../../../..";
import { editorUi } from "../mocks";

describe("DirectionMenu", () => {
  const create = () => new DirectionMenu(editorUi);

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
