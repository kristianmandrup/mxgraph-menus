import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class InsertMenu extends MenuAdder {
  add() {
    this.put(
      "insert",
      new Menu((menu: any, parent: any) => {
        this.addMenuItems(menu, ["insertLink", "insertImage"], parent);
      })
    );
  }
}
