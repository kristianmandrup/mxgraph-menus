import { MenuAdder } from "./MenuAdder";
import { Menu } from "../../Menu";

export class ViewZoomMenu extends MenuAdder {
  add() {
    this.put("viewZoom", new Menu(this.menuFunct));
  }

  menuFunct = (menu: any, parent: any) => {
    const { graph } = this;
    this.addMenuItems(menu, ["resetView", "-"], parent);
    var scales = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];

    for (var i = 0; i < scales.length; i++) {
      const add = (scale: any) => {
        menu.addItem(
          scale * 100 + "%",
          null,
          () => {
            graph.zoomTo(scale);
          },
          parent
        );
      };
      add(scales[i]);
    }
    this.addItems(menu, parent);
  };

  addItems(menu: any, parent: any) {
    this.addMenuItems(menu, this.menuItems, parent);
  }

  get $menuItems() {
    return [
      "-",
      "fitWindow",
      "fitPageWidth",
      "fitPage",
      "fitTwoPages",
      "-",
      "customZoom",
    ];
  }
}
