import { MenuAdder } from "../MenuAdder";
import { FlipHorizontalItem } from "./FlipHorizontalItem";
import { FlipVerticalItem } from "./FlipVerticalItem";

export class DirectionMenu extends MenuAdder {
  menuName = "direction";

  menuItems: any = {
    flipH: FlipHorizontalItem,
    flipV: FlipVerticalItem,
  };
  itemLayout = ["flipH", "flipV"];

  extraItems(menu: any, parent: any) {
    this.addMenuItems(menu, ["-", "rotation"], parent);
  }
}
