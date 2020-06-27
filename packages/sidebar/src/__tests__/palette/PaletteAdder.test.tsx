import { PaletteAdder } from "../../palette";
import { Sidebar } from "../../Sidebar";
import { editorUi } from "../mocks";

describe("PaletteAdder", () => {
  const editorElem = document.createElement("editor");
  const sidebar = new Sidebar(editorUi, editorElem);

  let adder;
  beforeAll(() => {
    adder = new PaletteAdder(sidebar);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(adder.editorUi).toBe(editorUi);
      });
    });

    // createAdvancedShapes
  });
});
