import { ImagePaletteAdder } from "..";
import { editorUi } from "./mocks";
import { Palettes } from "../palette";

describe("ImagePaletteAdder", () => {
  const palettes = new Palettes();

  let adder;
  beforeAll(() => {
    adder = new ImagePaletteAdder(palettes);
  });

  describe("instance", () => {
    describe("palettes", () => {
      test("to be set", () => {
        expect(adder.palettes).toBe(palettes);
      });
    });
  });
});
