import { Menubar } from "./Menubar";
import mx from "@mxgraph-app/mx";
import { BaseMenuAdder } from "../menus/BaseMenuAdder";
import { IEditorUI } from "../interfaces";
import { IElement } from "./types";
import { Menu } from "../Menu";
const { mxResources } = mx;

export class MenubarFactory extends BaseMenuAdder {
  editorUi: IEditorUI;
  container: any;
  documentMode: any;

  defaultMenuItems = ["file", "edit", "view", "arrange", "extras", "help"];

  constructor(editorUi: IEditorUI, container: any, menus?: any) {
    super(menus);
    this.editorUi = editorUi;
    this.container = container;
    this.documentMode = editorUi.documentMode;
  }

  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  createMenubar(container: HTMLElement = this.container) {
    var menubar = new Menubar(this.editorUi, container);
    var menus = this.defaultMenuItems;

    for (var i = 0; i < menus.length; i++) {
      const addMenu = (menu: any) => {
        const menuResource = mxResources.get(menus[i]);
        var elt = menubar.addMenu(menuResource, () => {
          // Allows extensions of menu.funct
          menu.funct.apply(this, [menu]);
        });
        this.menuCreated(menu, elt);
      };
      addMenu(this.get(menus[i]));
    }

    return menubar;
  }

  /**
   * Creates the keyboard event handler for the current graph and history.
   * menu: Menu
   * elem: HTMLElement
   */
  menuCreated(menu: Menu, elem: IElement, className?: string) {
    if (elem != null) {
      className = className != null ? className : "geItem";
      const { documentMode } = this;
      menu.addListener("stateChanged", () => {
        elem.enabled = menu.enabled;

        if (!menu.enabled) {
          elem.className = className + " mxDisabled";

          if (documentMode == 8) {
            elem.style.color = "#c3c3c3";
          }
        } else {
          elem.className = className || "";

          if (documentMode == 8) {
            elem.style.color = "";
          }
        }
      });
    }
  }
}
