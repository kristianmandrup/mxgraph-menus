import mx from "@mxgraph-app/mx";
import { DirectionItem } from "./DirectionItem";
const { mxConstants } = mx;

export class FlipHorizontalItem extends DirectionItem {
  flip = {
    name: "flipH",
    direction: mxConstants.STYLE_FLIPH,
  };
}
