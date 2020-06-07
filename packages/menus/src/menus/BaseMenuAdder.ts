import { IEditorUI } from "../interfaces";

export class BaseMenuAdder {
  editorUi: IEditorUI;
  menus: any = {};

  constructor(editorUi: IEditorUI, menus?: any) {
    this.editorUi = editorUi;
    this.menus = menus || this.createMenus();
  }

  createMenus() {
    return {};
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  get(name) {
    return this.menus[name];
  }

  /**
   * Adds the label menu items to the given menu and parent.
   */
  put(name, menu) {
    this.menus[name] = menu;
    return this;
  }
}
