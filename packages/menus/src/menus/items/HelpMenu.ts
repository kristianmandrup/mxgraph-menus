import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class HelpMenu extends MenuAdder {
  add() {
    this.put("help", new Menu(this.menuFunct));
  }

  menuFunct = (menu: any, _parent: any) => {
    this.addMenuItems(menu, ["help", "-", "about"]);
  };
}
