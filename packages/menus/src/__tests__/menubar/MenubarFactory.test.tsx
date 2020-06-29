// import { MenubarComponent } from "./MenubarComponent";
// import renderer from "react-test-renderer";
import { MenubarFactory } from "../..";
import { editorUi } from "../mocks";
import { Menu } from "../../Menu";
describe("MenubarFactory", () => {
  const container = document.createElement("x");
  const create = (menus?) => new MenubarFactory(editorUi, container, menus);

  describe("instance", () => {
    const menus = undefined;
    const factory = create();

    describe("properties", () => {
      describe("editorUi", () => {
        test("to be set", () => {
          expect(factory.editorUi).toBe(editorUi);
        });
      });

      describe("container", () => {
        test("is set", () => {
          expect(factory.container).toBe(container);
        });
      });

      describe("documentMode", () => {
        test("to be set", () => {
          expect(factory.documentMode).toBe(editorUi.documentMode);
        });
      });

      describe("menus", () => {
        test("to be set", () => {
          expect(factory.menus).toBe(menus);
        });
      });
    });

    describe("methods", () => {
      describe("#createMenubar", () => {
        describe("no args", () => {
          test("creates menubar", () => {
            const menubar = factory.createMenubar();
            expect(menubar).toBeDefined();
          });
        });

        describe("with container element", () => {
          const containerElem = document.createElement("xx");

          test("creates menubar for container", () => {
            const menubar = factory.createMenubar(containerElem);
            expect(menubar).toBeDefined();
          });
        });
      });

      describe("#menuCreated", () => {
        describe("pass menu", () => {
          test("adds event listener", () => {
            // must be an mxEventSource (delegate) with method addListener
            const menu = new Menu(editorUi);
            const elem = document.createElement("xx");
            expect(() => factory.menuCreated(menu, elem)).not.toThrow();
          });
        });
      });
    });
  });
});
