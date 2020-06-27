import { Palettes } from "../../palette";
import { Sidebar } from "../../Sidebar";
import { editorUi } from "../mocks";

describe("Palettes", () => {
  const editorElem = document.createElement("editor");
  const sidebar = new Sidebar(editorUi, editorElem);

  let palettes;
  beforeAll(() => {
    palettes = new Palettes(sidebar);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(palettes.editorUi).toBe(editorUi);
      });
    });

    // createAdvancedShapes
  });
});
