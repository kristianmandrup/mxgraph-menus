import { PopupMenu } from "../../../menus";
import { editorUi } from "../mocks";
import { Menu } from "../../../Menu";

describe("PopupMenu", () => {
  const create = () => new PopupMenu(editorUi);

  describe("instance", () => {
    let instance;

    beforeEach(() => {
      instance = create();
    });

    it("was created", () => {
      expect(instance).toBeDefined();
    });

    describe("properties", () => {
      describe("graph", () => {
        it("is set", () => {
          expect(instance.graph).toBeDefined();
        });
      });

      describe("state", () => {
        it("is set", () => {
          expect(instance.state).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      const menu = new Menu(editorUi);

      describe("#promptChange", () => {
        const label = "x", hint = "x", opts = {};

        it("does not throw", () => {
          expect(() => instance.promptChange(menu, label, hint, opts)).not
            .toThrow();
        });
      });

      describe("#add", () => {
        it("does not throw", () => {
          expect(() => instance.add()).not
            .toThrow();
        });
      });

      describe("#dialogueFunct", () => {
        const newValue = "y";
        it("does not throw", () => {
          expect(() => instance.dialogueFunct(newValue)).not
            .toThrow();
        });
      });
    });
  });
});
