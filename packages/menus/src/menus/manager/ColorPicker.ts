import { ColorDialog } from "../../_imports";
import mx from "@mxgraph-app/mx";
import { IEditorUI } from "../../interfaces";
const { mxConstants } = mx;

export class ColorPicker {
  editorUi: IEditorUI;
  graph: any;
  colorDialog?: ColorDialog;

  constructor(editorUi: IEditorUI) {
    this.editorUi = editorUi;
    this.graph = editorUi.editor.graph;
  }

  proto: any = ColorDialog.prototype;

  presetColors = this.proto.presetColors;
  defaultColors = this.proto.defaultColors;

  get h() {
    const { presetColors, defaultColors } = this;
    return (
      226 +
      (Math.ceil(presetColors.length / 12) +
        Math.ceil(defaultColors.length / 12)) *
        17
    );
  }

  /**
   * Adds a handler for showing a menu in the given element.
   */
  pickColor(key: string, cmd: any, defaultValue: any) {
    const { graph } = this;

    if (cmd != null && graph.cellEditor.isContentEditing()) {
      this.createColorDialog(cmd, defaultValue);
    } else {
      this.setColorDialog(key);
    }
  }

  createColorDialog(cmd: any, defaultValue: any) {
    const { graph, h } = this;
    // Saves and restores text selection for in-place editor
    var selState = graph.cellEditor.saveSelection();

    var dlg: any = new ColorDialog(
      this.editorUi,
      defaultValue || "000000",
      (color: string) => {
        graph.cellEditor.restoreSelection(selState);
        document.execCommand(
          cmd,
          false,
          color != mxConstants.NONE ? color : "transparent"
        );
      },
      () => {
        graph.cellEditor.restoreSelection(selState);
      }
    );
    this.editorUi.showDialog(dlg.container, 230, h, true, true);
    dlg.init();
  }

  setColorDialog(key: string) {
    const { graph, h } = this;
    if (this.colorDialog == null) {
      this.colorDialog = new ColorDialog(this.editorUi);
    }

    this.colorDialog.currentColorKey = key;
    var state = graph.getView().getState(graph.getSelectionCell());
    var color = "none";

    if (state != null) {
      color = state.style[key] || color;
    }

    if (color == "none") {
      color = "ffffff";
      this.colorDialog.picker.fromString("ffffff");
      this.colorDialog.colorInput.value = "none";
    } else {
      this.colorDialog.picker.fromString(color);
    }

    this.editorUi.showDialog(this.colorDialog.container, 230, h, true, true);
    this.colorDialog.init();
  }
}
