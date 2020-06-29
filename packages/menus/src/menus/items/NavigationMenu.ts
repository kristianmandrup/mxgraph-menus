import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class NavigationMenu extends MenuAdder {
  add() {
    this.put(
      "navigation",
      new Menu(this.editorUi, (menu: any, parent: any) => {
        this.addMenuItems(
          menu,
          [
            "home",
            "-",
            "exitGroup",
            "enterGroup",
            "-",
            "expand",
            "collapse",
            "-",
            "collapsible",
          ],
          parent
        );
      })
    );
  }
}
