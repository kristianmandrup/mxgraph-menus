import { ColorDialog } from "../../dialogs";

import { editorUi } from "../mocks";

describe("AboutDialog", () => {
  const ui = editorUi;

  let dialog;
  beforeAll(() => {
    dialog = new ColorDialog(ui);
  });

  // See: https://www.npmjs.com/package/jscolor-picker

  describe("created", () => {
    beforeAll(() => {
      dialog = new ColorDialog(ui);
    });

    test("editorUi set", () => {
      expect(dialog.editorUi).toBe(editorUi);
    });

    describe("container", () => {
      test("defined", () => {
        dialog = new ColorDialog(ui);
        expect(dialog.container).toBeDefined();
      });
    });
  });
});
