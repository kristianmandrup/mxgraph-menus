import { Menus } from "../../Menus";
import { editorUi } from "../mocks";

describe("Menus", () => {
  const menus = {};
  const create = (menus) => new Menus(editorUi, menus);

  describe("instance", () => {
    let instance;

    beforeEach(() => {
      instance = create(menus);
    });

    describe("properties", () => {
      describe("editorUi", () => {
        it("is set", () => {
          expect(instance.editorUi).toBe(editorUi);
        });
      });

      describe("menus", () => {
        it("is set", () => {
          expect(instance.menus).toBe(menus);
        });
      });

      describe("customFonts", () => {
        it("is set", () => {
          expect(instance.customFonts).toEqual([]);
        });
      });

      describe("customFontSizes", () => {
        it("is set", () => {
          expect(instance.customFontSizes).toEqual([]);
        });
      });

      describe("documentMode", () => {
        it("is set", () => {
          expect(instance.documentMode).toEqual(editorUi.documentMode);
        });
      });
    });

    describe("init", () => {
      instance.init();

      it("must have menus", () => {
        expect(instance.menus).not.toBeUndefined();
      });
    });
  });
});
