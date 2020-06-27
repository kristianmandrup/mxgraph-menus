import { FoldingHandler } from "..";
import { editorUi } from "./mocks";
import { Palettes } from "../palette";

describe("ImagePaletteAdder", () => {
  let handler;
  beforeAll(() => {
    handler = new FoldingHandler(editorUi);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(handler.editorUi).toBe(editorUi);
      });
    });
  });
});
