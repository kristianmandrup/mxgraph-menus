import { AddLayerManager, LayersWindow } from "../../../../dialogs";

import { editorUi } from "../../../mocks";

describe("LayerAdder", () => {
  const ui = editorUi;

  let win, adder;
  beforeAll(() => {
    win = new LayersWindow(ui);
    adder = new AddLayerManager(win);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("layersWindow", () => {
        test("defined", () => {
          expect(adder.layersWindow).toBe(win);
        });
      });
    });
  });
});
