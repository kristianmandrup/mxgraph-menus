import { LayerRefreshManager, LayersWindow } from "../../../../dialogs";

import { editorUi } from "../../../mocks";

describe("LayerRefreshManager", () => {
  const ui = editorUi;

  let win, instance;
  beforeAll(() => {
    win = new LayersWindow(ui);
    instance = new LayerRefreshManager(win);
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
