import { MenuAdder } from "../../MenuAdder";
import { Menu } from "../../../../Menu";

import mx from "@mxgraph-app/mx";
import { FontFamilyItem } from "./FontFamilyItem";

const { mxUtils, mxEventObject, mxConstants, mxResources } = mx;

export class FontFamilyMenu extends MenuAdder {
  /**
   * Adds the label menu items to the given menu and parent.
   */
  defaultFonts = [
    "Helvetica",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Comic Sans MS",
    "Courier New",
    "Georgia",
    "Lucida Console",
    "Tahoma",
  ];

  add() {
    this.put(
      "fontFamily",
      new Menu(this.editorUi, (menu: any, parent: any) => {
        const createAddItem = (menu: any) => {
          const fontSizeItem = new FontFamilyItem(menu);
          return (item: any) => {
            fontSizeItem.addItem(item);
          };
        };
        const addItem = createAddItem(menu);

        for (var i = 0; i < this.defaultFonts.length; i++) {
          addItem(this.defaultFonts[i]);
        }

        menu.addSeparator(parent);

        if (this.customFonts.length > 0) {
          for (var i = 0; i < this.customFonts.length; i++) {
            addItem(this.customFonts[i]);
          }

          menu.addSeparator(parent);

          menu.addItem(
            mxResources.get("reset"),
            null,
            () => {
              this.customFonts = [];
              this.editorUi.fireEvent(new mxEventObject("customFontsChanged"));
            },
            parent
          );

          menu.addSeparator(parent);
        }

        this.promptChange(menu, mxResources.get("custom") + "...", "", {
          defaultValue: mxConstants.DEFAULT_FONTFAMILY,
          key: mxConstants.STYLE_FONTFAMILY,
          parent,
          enabled: true,
          fn: (newValue: any) => {
            if (mxUtils.indexOf(this.customFonts, newValue) < 0) {
              this.customFonts.push(newValue);
              this.editorUi.fireEvent(new mxEventObject("customFontsChanged"));
            }
          },
        });
      })
    );
  }
}
