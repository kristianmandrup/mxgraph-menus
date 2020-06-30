import { LayerDuplicator, LayersWindow } from "../../../../dialogs";

import { editorUi } from "../../../mocks";

describe("LayerDuplicator", () => {
  const ui = editorUi;

  let win, instance;
  beforeAll(() => {
    win = new LayersWindow(ui);
    instance = new LayerDuplicator(win);
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
