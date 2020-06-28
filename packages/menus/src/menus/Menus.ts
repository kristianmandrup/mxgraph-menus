import mx from "@mxgraph-app/mx";
import { MenuItems } from ".";
import { InsertTableItem } from "./manager/InsertTableItem";
import { EdgeStyleChange } from "./manager/EdgeStyleChange";
import { BaseMenuAdder } from "./BaseMenuAdder";
import { IEditorUI } from "../interfaces";
const { mxClient, mxResources, mxUtils } = mx;

/**
 * Copyright (c) 2006-2012, JGraph Ltd
 */
/**
 * Constructs a new graph editor
 */
export class Menus extends BaseMenuAdder {
  checkmarkImage: any; // Editor.checkmarkImage
  customFonts: any[] = [];
  customFontSizes: any[] = [];
  documentMode: any;

  constructor(editorUi: IEditorUI, menus?: any) {
    super(editorUi, menus);
    this.documentMode = editorUi.documentMode;
    this.init();

    // console.log("created", { menus: this.menus });

    // Pre-fetches checkmark image
    if (!mxClient.IS_SVG) {
      new Image().src = this.checkmarkImage;
    }
  }

  get menuItems() {
    return new MenuItems(this.editorUi, this.menus);
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  init() {
    this.menuItems.addToMenu();
  }

  /**
   * Adds a menu item to insert a table.
   */
  addInsertTableItem(menu: any, insertFn: any) {
    new InsertTableItem(this.editorUi).add(menu, insertFn);
  }

  /**
   * Adds a style change item to the given menu.
   */
  edgeStyleChange(menu: any, label: any, opts: any = {}) {
    const { keys, values, sprite, parent, reset } = opts;
    new EdgeStyleChange(this.editorUi).add(
      menu,
      label,
      keys,
      values,
      sprite,
      parent,
      reset
    );
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  get(name: string) {
    return this.menus[name];
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  put(name: string, menu: any) {
    this.menus[name] = menu;

    return menu;
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  addMenu(name: string, popupMenu: any, parent: any) {
    var menu = this.get(name);

    if (menu != null && (popupMenu.showDisabled || menu.isEnabled())) {
      this.get(name).execute(popupMenu, parent);
    }
  }

  /**
   * Adds the given submenu.
   */
  addSubmenu(name: string, menu: any, parent: any, label: string = name) {
    var entry = this.get(name);

    if (entry != null) {
      var enabled = entry.isEnabled();

      if (menu.showDisabled || enabled) {
        var submenu = menu.addItem(
          label || mxResources.get(name),
          null,
          null,
          parent,
          null,
          enabled
        );
        this.addMenu(name, menu, submenu);
      }
    }
  }

  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  addMenuItems(
    menu: any,
    keys: string[],
    parent: any,
    trigger?: any,
    sprites?: any[]
  ) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] == "-") {
        menu.addSeparator(parent);
      } else {
        this.addMenuItem(
          menu,
          keys[i],
          parent,
          trigger,
          sprites != null ? sprites[i] : null
        );
      }
    }
  }

  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  addMenuItem(
    menu: any,
    key: string,
    parent: any,
    trigger: any,
    sprite?: any,
    label?: string
  ) {
    var action = this.editorUi.actions.getAction(key);

    if (
      action != null &&
      (menu.showDisabled || action.isEnabled()) &&
      action.visible
    ) {
      var item = menu.addItem(
        label || action.label,
        null,
        function () {
          action.funct(trigger);
        },
        parent,
        sprite,
        action.isEnabled()
      );

      // Adds checkmark image
      if (action.toggleAction && action.isSelected()) {
        menu.addCheckmark(item, this.checkmarkImage);
      }

      this.addShortcut(item, action);

      return item;
    }

    return null;
  }

  /**
   * Adds a checkmark to the given menuitem.
   */
  addShortcut(item: any, action: any) {
    if (action.shortcut != null) {
      var td = item.firstChild.nextSibling.nextSibling;
      var span = document.createElement("span");
      span.style.color = "gray";
      mxUtils.write(span, action.shortcut);
      td.appendChild(span);
    }
  }
}
