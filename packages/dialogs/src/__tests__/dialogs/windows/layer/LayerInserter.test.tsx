import { LayerInserter, LayersWindow } from "../../../../dialogs";

import { editorUi } from "../../../mocks";

describe("LayerInserter", () => {
  const ui = editorUi;

  let win, instance;
  beforeAll(() => {
    win = new LayersWindow(ui);
    instance = new LayerInserter(win);
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
