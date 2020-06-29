import { ColorPicker } from "../../../menus";
import { editorUi } from "../mocks";

describe("ColorPicker", () => {
  const create = () => new ColorPicker(editorUi);

  describe("instance", () => {
    let instance;

    beforeEach(() => {
      instance = create();
    });

    it("was created", () => {
      expect(instance).toBeDefined();
    });

    describe("properties", () => {
      describe("presetColors", () => {
        it("> 0", () => {
          expect(instance.presetColors).toBeGreaterThan(0);
        });
      });

      describe("defaultColors", () => {
        it("> 0", () => {
          expect(instance.defaultColors).toBeGreaterThan(0);
        });
      });

      describe("h", () => {
        it("height based on colors in dialog", () => {
          expect(instance.h).toBeGreaterThan(0);
        });
      });
    });

    describe("methods", () => {
      const key = "red";
      const cmd = "fill";
      const defaultValue = "yellow";

      describe("#setColorDialog(", () => {
        it("does not throw", () => {
          expect(() => instance.setColorDialog(key)).not
            .toThrow();
        });
      });

      describe("#createColorDialog(", () => {
        it("does not throw", () => {
          expect(() => instance.createColorDialog(cmd, defaultValue)).not
            .toThrow();
        });
      });

      describe("#pickColor", () => {
        it("does not throw", () => {
          expect(() => instance.pickColor(key, cmd, defaultValue)).not
            .toThrow();
        });
      });
    });
  });
});
