import { SidebarInitializer } from "..";

import { editorUi } from "./mocks";
import { Sidebar } from "../Sidebar";

describe("SidebarInitializer", () => {
  const ui = editorUi;
  const container = document.createElement("editor");
  let sidebar = new Sidebar(ui, container);
  let initializer;
  beforeAll(() => {
    initializer = new SidebarInitializer(sidebar);
  });

  describe("instance", () => {
    describe("sidebar", () => {
      test("to be set", () => {
        expect(initializer.sidebar).toBe(sidebar);
      });
    });

    describe("editorUi", () => {
      test("to be set", () => {
        expect(initializer.editorUi).toBe(editorUi);
      });
    });

    describe("container", () => {
      test("to be set", () => {
        expect(initializer.container).toBe(container);
      });
    });

    describe("#initialize", () => {
      initializer.initialize();

      describe("graph", () => {
        test("is set", () => {
          expect(initializer.graph).toBeDefined();
        });
      });
    });
  });
});
