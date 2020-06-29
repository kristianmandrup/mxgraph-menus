import { Palettes } from "../../palette";
import { Sidebar } from "../../Sidebar";
import { editorUi } from "../mocks";

describe("Palettes", () => {
  const editorElem = document.createElement("editor");
  const sidebar = new Sidebar(editorUi, editorElem);

  let instance;
  beforeAll(() => {
    instance = new Palettes(sidebar);
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

      describe("#addAll", () => {
        const expansion = { basic: true };

        test("does not throw", () => {
          expect(instance.addAll(expansion)).not
            .toThrow();
        });
      });

      describe("#addArrowsPalette", () => {
        const expansion = { basic: true };

        test("does not throw", () => {
          expect(instance.addArrowsPalette()).not
            .toThrow();
        });
      });

      // addFlowchartPalette()
      // addStencilPalette(
      //   id,
      //   title,
      //   stencilFile,
      //   style)

      //   addSearchPalette(expand)
      //   addGeneralPalette(expand)
      //   addGeneralPalette()
      //   addBasicPalette(dir)
      //   addMiscPalette(expand)
      //   addAdvancedPalette(expand?)
      //   createAdvancedShapes()
      //   addPaletteFunctions(id, title, expanded, fns)
      //   addUmlPalette(expand?)
      //   addBpmnPalette(dir, expand?)
      //   addImagePalette(id, title, prefix, postfix, items, titles, tags)
    });
  });
});
