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

      describe("#createItem", () => {
        const cells = [],
          width = 600,
          height = 400,
          title = "hello";
        const showLabel = true,
          showTitle = true,
          allowCellsInserted = true;

        test("does not throw", () => {
          expect(() =>
            instance.createItem(
              cells,
              title,
              showLabel,
              showTitle,
              width,
              height,
              allowCellsInserted,
            )
          ).toBeDefined();
        });
      });

      describe("#updateShapes", () => {
        const source = {}, targets = [{}];
        test("does not throw", () => {
          expect(() => instance.updateShapes(source, targets)).toBeDefined();
        });
      });

      describe("#createDropHandler", () => {
        const cells = [{}],
          allowSplit = true,
          allowCellsInserted = true,
          bounds = {};
        test("does not throw", () => {
          expect(() =>
            instance.createDropHandler(
              cells,
              allowSplit,
              allowCellsInserted,
              bounds,
            )
          ).toBeDefined();
        });
      });

      describe("#createDropHandler", () => {
        const width = 600, height = 400;
        test("does not throw", () => {
          expect(() => instance.createDragPreview(width, height)).toBeDefined();
        });
      });

      describe("#dropAndConnect", () => {
        const source = {}, targets = [{}];
        const direction = "left", dropCellIndex = 0, evt = {};
        test("does not throw", () => {
          expect(() =>
            instance.dropAndConnect(
              source,
              targets,
              direction,
              dropCellIndex,
              evt,
            )
          ).toBeDefined();
        });
      });

      // isDropStyleEnabled(cells, firstVertex)
      // isDropStyleTargetIgnored(state)
      // createDragSource(elt, dropHandler, preview, cells, bounds)
      // itemClicked(cells, ds, evt, elt)
      // addClickHandler(elt, ds, cells)
      // addEntry(tags, fn?)
      // addFoldingHandler(title, content, funct)
      // getTagsForStencil(packageName, stencilName, moreTags)
    });
  });
});
