import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class ExtrasMenu extends MenuAdder {
  add() {
    this.put(
      "extras",
      new Menu((menu: any, _parent: any) => {
        this.addMenuItems(menu, [
          "copyConnect",
          "collapseExpand",
          "-",
          "editDiagram",
        ]);
      })
    );
  }
}
