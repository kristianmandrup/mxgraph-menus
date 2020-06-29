import { FilenameDialog } from "../../_imports";
import mx from "@mxgraph-app/mx";
import { IEditorUI } from "../../interfaces";
const { mxResources } = mx;

export class MenuItemAdder {
  editorUi: IEditorUI;
  menu: any;
  graph: any;

  constructor(editorUi: IEditorUI, menu: any) {
    this.editorUi = editorUi;
    this.menu = menu;
    this.graph = editorUi.editor.graph;
  }

  addItem(item: any, submenu: any, fn: any, node: any) {
    this.menu.addItem(item, submenu, fn, node);
  }

  promptSpacing = (defaultValue: any, fn: any) => {
    var dlg: any = new FilenameDialog(
      this.editorUi,
      defaultValue,
      mxResources.get("apply"),
      (newValue: any) => {
        fn(parseFloat(newValue));
      },
      mxResources.get("spacing")
    );
    this.editorUi.showDialog(dlg.container, 300, 80, true, true);
    dlg.init();
  };
}
