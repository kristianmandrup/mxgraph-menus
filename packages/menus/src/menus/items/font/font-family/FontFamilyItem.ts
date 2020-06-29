import mx from "@mxgraph-app/mx";
import { AbstractFontItem } from "../AbstractFontItem";
const { mxConstants } = mx;

export class FontFamilyItem extends AbstractFontItem {
  addItem(fontname) {
    const { menu } = this;
    var tr: any = this.styleChange(
      menu,
      fontname,
      [mxConstants.STYLE_FONTFAMILY],
      [fontname],
      null,
      parent,
      () => {
        document.execCommand("fontname", false, fontname);
      },
      this.postFn
    );
    tr.firstChild.nextSibling.style.fontFamily = fontname;
  }

  postFn = () => {
    const { graph } = this;
    graph.updateLabelElements(graph.getSelectionCells(), function (elt) {
      elt.removeAttribute("face");
      elt.style.fontFamily = null;

      if (elt.nodeName == "PRE") {
        graph.replaceElement(elt, "div");
      }
    });
  };
}
