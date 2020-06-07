import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class EditMenu extends MenuAdder {
  add() {
    this.put(
      "edit",
      new Menu((menu: any, _parent: any) => {
        this.addMenuItems(menu, this.menuItems);
      })
    );
  }

  get $menuItems() {
    return [
      "undo",
      "redo",
      "-",
      "cut",
      "copy",
      "paste",
      "delete",
      "-",
      "duplicate",
      "-",
      "editData",
      "editTooltip",
      "editStyle",
      "-",
      "edit",
      "-",
      "editLink",
      "openLink",
      "-",
      "selectVertices",
      "selectEdges",
      "selectAll",
      "selectNone",
      "-",
      "lockUnlock",
    ];
  }
}
