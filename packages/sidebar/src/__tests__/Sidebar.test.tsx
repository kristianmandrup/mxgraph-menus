import { editorUi, graph } from "./mocks";
import { Sidebar } from "../Sidebar";

describe("SidebarPaletteSetup", () => {
  const container = document.createElement("x");

  let instance;
  beforeAll(() => {
    instance = new Sidebar(editorUi, container);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("editorUi", () => {
        test("to be set", () => {
          expect(instance.editorUi).toBe(editorUi);
        });
      });
      describe("graph", () => {
        test("to be set", () => {
          expect(instance.graph).toBe(graph);
        });
      });
      describe("palettes", () => {
        test("to be set", () => {
          expect(instance.palettes).toBeDefined();
        });
      });
      describe("paletteManager", () => {
        test("to be set", () => {
          expect(instance.paletteManager).toBeDefined();
        });
      });
      describe("thumbnail", () => {
        test("to be set", () => {
          expect(instance.thumbnail).toBeDefined();
        });
      });
      describe("documentMode", () => {
        test("to be set", () => {
          expect(instance.documentMode).toBeDefined();
        });
      });
    });

    describe("methods", () => {
      describe("#init", () => {
        test("does not throw", () => {
          expect(() => instance.init()).toBe(editorUi);
        });
      });
      describe("#getTooltipOffset", () => {
        test("does not throw", () => {
          expect(() => instance.getTooltipOffset()).toBeDefined();
        });
      });
      describe("#getTooltipOffset", () => {
        const elem = document.createElement("a");
        const cells = [];
        const w = 500, h = 200, title = "tools";
        test("does not throw", () => {
          expect(() => instance.showTooltip(elem, cells, w, h, title))
            .toBeDefined();
        });
      });
      describe("#hideTooltip", () => {
        test("does not throw", () => {
          expect(() => instance.hideTooltip()).toBeDefined();
        });
      });
      describe("#filterTags", () => {
        const tags = ["x"];
        test("does not throw", () => {
          expect(() => instance.filterTags(tags)).toBeDefined();
        });
      });
      describe("#cloneCell", () => {
        const cell = {}, value = "x";
        test("does not throw", () => {
          expect(() => instance.cloneCell(cell, value)).toBeDefined();
        });
      });
      describe("#addSearchPalette", () => {
        test("does not throw", () => {
          expect(() => instance.addSearchPalette()).toBeDefined();
        });
      });
      describe("#insertSearchHint", () => {
        const div = document.createElement("div"), searchTerm = "hello";
        test("does not throw", () => {
          expect(() => instance.insertSearchHint(div, searchTerm))
            .toBeDefined();
        });
      });
      describe("#addSearchPalette", () => {
        const label = "x";
        test("does not throw", () => {
          expect(() => instance.createTitle(label)).toBeDefined();
        });
      });
      describe("#createThumb", () => {
        const cells = [],
          width = 600,
          height = 400,
          parent = document.createElement("x"),
          title = "hello";
        test("does not throw", () => {
          expect(() =>
            instance.createThumb(cells, width, height, parent, title)
          ).toBeDefined();
        });
      });
    });
  });
});
