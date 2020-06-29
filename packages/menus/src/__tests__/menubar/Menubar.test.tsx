// import { MenubarComponent } from "./MenubarComponent";
// import renderer from "react-test-renderer";
import { Menubar } from "../..";
import { editorUi } from "../mocks";
import { Menu } from "../../Menu";

describe("Menubar", () => {
  const create = (container) => new Menubar(editorUi, container);

  describe("instance", () => {
    let container, instance;
    beforeAll(() => {
      container = document.createElement("x");
      instance = create(container);
    });

    describe("properties", () => {
      describe("editorUi", () => {
        test("to be set", () => {
          expect(instance.editorUi).toBe(editorUi);
        });
      });

      describe("container", () => {
        test("to be set", () => {
          expect(instance.container).toBe(container);
        });
      });
    });

    describe("methods", () => {
      describe("#addMenu", () => {
        const label = "x";
        const funct = () => {};

        // See: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
        describe("after (default)", () => {
          let menuElem: HTMLElement;
          beforeAll(() => {
            container = document.createElement("x");
            instance = create(container);
            menuElem = instance.addMenu(label, funct);
          });

          test("adds menu to bar", () => {
            expect(menuElem).toBeDefined();
          });

          test("adds menu element as child of container", () => {
            expect(menuElem.children[0]).toBe(container);
          });
        });

        // See: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
        describe("before", () => {
          let menuElem;

          beforeAll(() => {
            // before: true
            container = document.createElement("x");
            instance = create(container);
            menuElem = instance.addMenu(label, funct, true);
          });

          test("adds menu to bar", () => {
            expect(menuElem).toBeDefined();
          });

          test("inserts menu element before container", () => {
            expect(menuElem.previousSibling).toBe(container);
          });
        });
      });

      describe("#addMenuHandler", () => {
        describe("pass element", () => {
          let elem;
          beforeAll(() => {
            elem = document.createElement("x");
            instance = create(container);
          });

          test("does not throw", () => {
            expect(() => instance.addMenuHandler(elem)).not.toThrow();
          });
        });
      });

      describe("#setMouseDown", () => {
        describe("pass element", () => {
          let elem;
          beforeAll(() => {
            elem = document.createElement("x");
            instance = create(container);
          });

          test("does not throw", () => {
            expect(() => instance.setMouseDown(elem)).not.toThrow();
          });
        });
      });

      describe("#destroy", () => {
        let elem;
        beforeAll(() => {
          elem = document.createElement("x");
          instance = create(container);
        });

        test("does not throw", () => {
          expect(() => instance.destroy()).not.toThrow();
        });
      });
    });
  });
});
