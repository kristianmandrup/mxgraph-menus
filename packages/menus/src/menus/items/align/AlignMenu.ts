import { MenuAdder } from "../MenuAdder";
import { CenterAlignItem } from "./CenterAlignItem";
import { BottomAlignItem } from "./BottomAlignItem";
import { LeftAlignItem } from "./LeftAlignItem";
import { MiddleAlignItem } from "./MiddleAlignItem";
import { RightAlignItem } from "./RightAlignItem";
import { TopAlignItem } from "./TopAlignItem";

const menuItems = {
  bottomAlign: BottomAlignItem,
  center: CenterAlignItem,
  leftAlign: LeftAlignItem,
  middle: MiddleAlignItem,
  rightAlign: RightAlignItem,
  topAlign: TopAlignItem,
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
