import { MenuAdder } from "../../MenuAdder";
import { Menu } from "../../../../Menu";
import { IEditorUI } from "../../../../interfaces";

import { FontSizeItem } from "./FontSizeItem";
import mx from "@mxgraph-app/mx";
const { mxConstants, mxResources } = mx;

export class FontSizeMenu extends MenuAdder {
  constructor(editorUi: IEditorUI, opts: any = {}) {
    super(editorUi, opts);
  }

  add() {
    this.put(
      "fontSize",
      new Menu(this.editorUi, (menu: any, parent: any) => {
        const createAddItem = (menu: any) => {
          const fontSizeItem = new FontSizeItem(menu);
          return (item: any) => {
            fontSizeItem.addItem(item);
          };
        };
        const addItem = createAddItem(menu);

        var sizes = [6, 8, 9, 10, 11, 12, 14, 18, 24, 36, 48, 72];

        for (var i = 0; i < sizes.length; i++) {
          addItem(sizes[i]);
        }

        menu.addSeparator(parent);

        if (this.customFontSizes.length > 0) {
          for (var i = 0; i < this.customFontSizes.length; i++) {
            addItem(this.customFontSizes[i]);
          }

          menu.addSeparator(parent);

          menu.addItem(
            mxResources.get("reset"),
            null,
            () => {
              this.customFontSizes = [];
            },
            parent
          );

          menu.addSeparator(parent);
        }

        this.promptChange(menu, mxResources.get("custom") + "...", "(pt)", {
          defaultValue: "12",
          key: mxConstants.STYLE_FONTSIZE,
          parent,
          enabled: true,
          fn: (newValue: any) => {
            this.customFontSizes.push(newValue);
          },
          sprite: true,
        });
      })
    );
  }
}
