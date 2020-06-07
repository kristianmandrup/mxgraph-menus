import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class FileMenu extends MenuAdder {
  add() {
    this.put(
      "file",
      new Menu((menu: any, parent: any) => {
        this.addMenuItems(
          menu,
          [
            "new",
            "open",
            "-",
            "save",
            "saveAs",
            "-",
            "import",
            "export",
            "-",
            "pageSetup",
            "print",
          ],
          parent
        );
      })
    );
  }
}
