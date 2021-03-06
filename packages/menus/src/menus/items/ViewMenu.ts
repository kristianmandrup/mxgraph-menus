import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class ViewMenu extends MenuAdder {
  add() {
    this.put(
      "view",
      new Menu((menu: any, parent: any) => {
        this.addMenuItems(
          menu,
          (this.editorUi.format != null ? ["formatPanel"] : []).concat(
            [
              "outline",
              "layers",
              "-",
              "pageView",
              "pageScale",
              "-",
              "scrollbars",
              "tooltips",
              "-",
              "grid",
              "guides",
              "-",
              "connectionArrows",
              "connectionPoints",
              "-",
              "resetView",
              "zoomIn",
              "zoomOut",
            ],
            parent
          )
        );
      })
    );
  }
}
