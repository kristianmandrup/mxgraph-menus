import { MenuItemAdder } from "../MenuItemAdder";
import mx from "@mxgraph-app/mx";
const { mxConstants } = mx;

export class CenterAlignItem extends MenuItemAdder {
  align = {
    name: "center",
    direction: mxConstants.ALIGN_CENTER,
  };
}
