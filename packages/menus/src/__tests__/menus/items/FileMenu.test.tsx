import { FileMenu } from "../../../menus";
import { editorUi } from "../mocks";

describe("FileMenu", () => {
  const create = () => new FileMenu(editorUi);

  describe("instance", () => {
    let menu;

    beforeEach(() => {
      menu = create();
    });

    it("was created", () => {
      expect(menu).toBeDefined();
    });

    describe.skip("properties", () => {
    });

    describe("methods", () => {
      describe("#add", () => {
        it("does not throw", () => {
          expect(() => menu.add()).not.toThrow();
        });
      });
    });
  });
});
