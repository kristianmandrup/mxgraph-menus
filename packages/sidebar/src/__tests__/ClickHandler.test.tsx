import { ClickHandler } from "..";
import { editorUi } from "./mocks";

describe("SidebarInitializer", () => {
  const ui = editorUi;

  let clickHandler;
  beforeAll(() => {
    clickHandler = new ClickHandler(editorUi);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(clickHandler.editorUi).toBe(editorUi);
      });
    });

    describe("editorUi", () => {
      const element = document.createElement("x");
      const dragSource: any = {};
      const cells = [];
      clickHandler.add(element, dragSource, cells);

      describe("dragSource", () => {
        test("has mouseDown handler", () => {
          expect(dragSource.mouseDown).toBeDefined();
        });
      });
    });
  });
});
