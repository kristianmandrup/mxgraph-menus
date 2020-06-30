import { LayerData, LayersWindow } from "../../../../dialogs";

import { editorUi } from "../../../mocks";

describe("LayerData", () => {
  const ui = editorUi;

  let win, instance;
  beforeAll(() => {
    win = new LayersWindow(ui);
    instance = new LayerData(win);
  });

  describe("instance", () => {
    describe("properties", () => {
      describe("layersWindow", () => {
        test("is set", () => {
          expect(instance.layersWindow).toBe(win);
        });
      });
    });
  });
});
