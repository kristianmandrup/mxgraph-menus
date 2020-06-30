import { LayersWindowUI, LayersWindow } from "../../../../dialogs";

import { editorUi } from "../../../mocks";

describe("LayersWindowUI", () => {
  const ui = editorUi;

  let win, instance;
  beforeAll(() => {
    win = new LayersWindow(ui);
    instance = new LayersWindowUI(win);
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
