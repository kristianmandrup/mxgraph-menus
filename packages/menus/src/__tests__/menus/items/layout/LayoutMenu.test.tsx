import { LayoutMenu } from "../../../..";
import { editorUi } from "../mocks";

describe("LayoutMenu", () => {
  const create = () => new LayoutMenu(editorUi);

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
