import { PaletteManager } from "../../palette";
import { Sidebar } from "../../Sidebar";
import { editorUi } from "../mocks";

describe("PaletteManager", () => {
  const editorElem = document.createElement("editor");
  const sidebar = new Sidebar(editorUi, editorElem);

  let manager;
  beforeAll(() => {
    manager = new PaletteManager(sidebar);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(manager.editorUi).toBe(editorUi);
      });
    });

    // createAdvancedShapes
  });
});
