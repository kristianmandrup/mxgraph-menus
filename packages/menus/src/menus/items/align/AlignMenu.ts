import { MenuAdder } from "../MenuAdder";
import { CenterAlign } from "./CenterAlign";
import { BottomAlign } from "./BottomAlign";
import { LeftAlign } from "./LeftAlign";
import { MiddleAlign } from "./MiddleAlign";
import { RightAlign } from "./RightAlign";
import { TopAlign } from "./TopAlign";

const menuItems = {
  bottomAlign: BottomAlign,
  center: CenterAlign,
  leftAlign: LeftAlign,
  middle: MiddleAlign,
  rightAlign: RightAlign,
  topAlign: TopAlign,
};

const defaults = {
  menuItems,
};

export class AlignMenu extends MenuAdder {
  menuItems: any = defaults.menuItems;
  menuName = "layout";

  itemLayout = [
    "leftAlign",
    "center",
    "rightAlign",
    "-",
    "topAlign",
    "middle",
    "bottomAlign",
  ];
}
