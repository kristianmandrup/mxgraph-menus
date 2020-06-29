import { MenuItemAdder } from "../MenuItemAdder";
import mx from "@mxgraph-app/mx";
const { mxConstants } = mx;

export class MiddleAlignItem extends MenuItemAdder {
  align = {
    name: "middle",
    direction: mxConstants.ALIGN_MIDDLE,
  };
}
