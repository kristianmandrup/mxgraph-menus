import { SidebarPaletteSetup } from "..";
import { editorUi, graph } from "./mocks";

describe("SidebarPaletteSetup", () => {
  const opts = {};

  let entries;
  beforeAll(() => {
    entries = new SidebarPaletteSetup(editorUi, graph, opts);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(entries.editorUi).toBe(editorUi);
      });
    });

    describe("graph", () => {
      test("to be set", () => {
        expect(entries.graph).toBe(graph);
      });
    });
    describe("palettes", () => {
      test("to be set", () => {
        expect(entries.palettes).toBeDefined();
      });
    });
  });
});
