import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class ViewPanelsMenu extends MenuAdder {
  add() {
    // Two special dropdowns that are only used in the toolbar
    this.put(
      "viewPanels",
      new Menu((menu: any, parent: any) => {
        if (this.editorUi.format != null) {
          this.addMenuItems(menu, ["formatPanel"], parent);
        }

        this.addMenuItems(menu, ["outline", "layers"], parent);
      })
    );
  }
}
