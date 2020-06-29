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
    });

    describe("methods", () => {
      const menu = new Menu(editorUi);
      const cell = {};
      const evt = {};

      describe("#createPopupMenu", () => {
        it("does not throw", () => {
          expect(() => instance.createPopupMenu(menu, cell, evt)).not
            .toThrow();
        });
      });

      describe("#addPopupMenuHistoryItems", () => {
        it("does not throw", () => {
          expect(() => instance.addPopupMenuHistoryItems(menu, cell, evt)).not
            .toThrow();
        });
      });

      describe("#addPopupMenuEditItems", () => {
        it("does not throw", () => {
          const key = "x";
          const defaultValue = "x";
          expect(() => instance.addPopupMenuEditItems(menu, cell, evt)).not
            .toThrow();
        });
      });

      describe("#addPopupMenuStyleItems", () => {
        it("does not throw", () => {
          const key = "x";
          const defaultValue = "x";
          expect(() => instance.addPopupMenuStyleItems(menu, cell, evt)).not
            .toThrow();
        });
      });

      describe("#addPopupMenuArrangeItems", () => {
        it("does not throw", () => {
          const key = "x";
          const defaultValue = "x";
          expect(() => instance.addPopupMenuArrangeItems(menu, cell, evt)).not
            .toThrow();
        });
      });

      describe("#addPopupMenuCellItems", () => {
        it("does not throw", () => {
          const key = "x";
          const defaultValue = "x";
          expect(() => instance.addPopupMenuCellItems(menu, cell, evt)).not
            .toThrow();
        });
      });

      describe("#addPopupMenuSelectionItems", () => {
        it("does not throw", () => {
          const key = "x";
          const defaultValue = "x";
          expect(() => instance.addPopupMenuSelectionItems(menu, cell, evt)).not
            .toThrow();
        });
      });
    });
  });
});
