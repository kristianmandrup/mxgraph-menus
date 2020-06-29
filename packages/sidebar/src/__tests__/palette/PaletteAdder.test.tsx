import { PaletteAdder } from "../../palette";
import { Sidebar } from "../../Sidebar";
import { editorUi } from "../mocks";

describe("PaletteAdder", () => {
  const editorElem = document.createElement("editor");
  const sidebar = new Sidebar(editorUi, editorElem);

  let instance;
  beforeAll(() => {
    instance = new PaletteAdder(sidebar);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("sidebar", () => {
        test("to be set", () => {
          expect(instance.sidebar).toBe(sidebar);
        });
      });
    });

    describe("methods", () => {
      describe("#addPalette", () => {
        const id = "x";
        const title = "stuff";
        const expanded = true;
        const onInit = () => {};

        test("does not throw", () => {
          expect(instance.addPalette(id, title, expanded, onInit)).not
            .toThrow();
        });
      });

      describe("#addFoldingHandler", () => {
        const title = "stuffed";
        const content = "some stuff";
        const funct = () => {};

        test("does not throw", () => {
          expect(instance.addFoldingHandler(title, content, funct)).not
            .toThrow();
        });
      });

      describe("#removePalette", () => {
        describe("#palette id NOT present", () => {
          test("does not throw", () => {
            expect(instance.removePalette("unknown")).not.toThrow();
          });
        });

        describe("#palette id present", () => {
          test("does not throw", () => {
            expect(instance.removePalette("basic")).not.toThrow();
          });
        });
      });
    });
  });
});
