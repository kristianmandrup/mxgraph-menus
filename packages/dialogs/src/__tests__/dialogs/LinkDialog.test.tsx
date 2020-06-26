import { LinkDialog } from "../../dialogs";

import { editorUi, cell } from "../mocks";

describe("LinkDialog", () => {
  const ui = editorUi;
  const initialValue = "www.link.com";
  const btnLabel = "linked";
  const fn = () => {};
  const opts = {};

  let dialog;
  beforeAll(() => {
    dialog = new LinkDialog(ui, initialValue, btnLabel, fn, opts);
  });

  // See: https://www.npmjs.com/package/jscolor-picker

  describe("created", () => {
    beforeAll(() => {
      dialog = new LinkDialog(ui, initialValue, btnLabel, fn, opts);
    });

    test("editorUi set", () => {
      expect(dialog.editorUi).toBe(editorUi);
    });
  });
});
