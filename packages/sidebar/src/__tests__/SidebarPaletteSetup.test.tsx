import { SidebarPaletteSetup } from "..";
import { editorUi, graph } from "./mocks";
import { Sidebar } from "../Sidebar";

describe("SidebarPaletteSetup", () => {
  const opts = {};
  const container = document.createElement("x");
  const sidebar = new Sidebar(editorUi, container);

  let instance;
  beforeAll(() => {
    instance = new SidebarPaletteSetup(sidebar, opts);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("sidebar", () => {
        test("to be set", () => {
          expect(instance.sidebar).toBe(sidebar);
        });
      });
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
      describe("documentMode", () => {
        test("to be set", () => {
          expect(instance.documentMode).toBe(sidebar.documentMode);
        });
      });
    });

    describe("methods", () => {
      describe("#init", () => {
        test("to be set", () => {
          expect(() => instance.init()).toBe(editorUi);
        });
      });
    });
  });
});
