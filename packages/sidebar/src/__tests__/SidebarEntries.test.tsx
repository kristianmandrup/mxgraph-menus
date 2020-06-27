import { SidebarEntries } from "..";
import { editorUi } from "./mocks";

describe("SidebarEntries", () => {
  const ui = editorUi;

  let entries;
  beforeAll(() => {
    entries = new SidebarEntries(editorUi);
  });

  describe("instance", () => {
    describe("editorUi", () => {
      test("to be set", () => {
        expect(entries.editorUi).toBe(editorUi);
      });
    });
  });
});
