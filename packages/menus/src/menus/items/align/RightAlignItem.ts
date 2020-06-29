import { AlignItem } from "./AlignItem";
import mx from "@mxgraph-app/mx";
const { mxConstants } = mx;

export class RightAlignItem extends AlignItem {
  align = {
    name: "rightAlign",
    direction: mxConstants.ALIGN_RIGHT,
  };
}
