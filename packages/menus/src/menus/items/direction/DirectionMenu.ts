import { MenuAdder } from "../MenuAdder";
import { FlipH } from "./FlipH";
import { FlipV } from "./FlipV";

export class DirectionMenu extends MenuAdder {
  menuName = "direction";

  menuItems: any = {
    flipH: FlipH,
    flipV: FlipV,
  };
  itemLayout = ["flipH", "flipV"];

  extraItems(menu: any, parent: any) {
    this.addMenuItems(menu, ["-", "rotation"], parent);
  }
}
