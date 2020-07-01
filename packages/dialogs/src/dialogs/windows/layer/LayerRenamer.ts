import { LayersWindow } from "./LayersWindow";
import { FilenameDialog } from "../../../filename/FilenameDialog";
import mx from "@mxgraph-app/mx";
const { mxResources } = mx;

export class LayerRenamer {
  layersWindow: LayersWindow;
  graph: any;
  editorUi: any;

  constructor(layersWindow: LayersWindow) {
    this.layersWindow = layersWindow;
    const { editorUi, graph } = layersWindow;
    this.editorUi = editorUi;
    this.graph = graph;
  }

  labelOf(layer) {
    // return graph.convertValueToString(layer)
    return layer;
  }

  renameLayer = (layer) => {
    const { graph, editorUi } = this;
    if (graph.isEnabled() && layer != null) {
      const label = this.labelOf(layer);
      const dlg = this.createRenameDialog(layer, label);
      editorUi.showDialog(dlg.container, 300, 100, true, true);
      dlg.init();
    }
  };

  createRenameDialog(layer, label) {
    const { graph, editorUi } = this;
    return new FilenameDialog(
      editorUi,
      label || mxResources.get("background"),
      mxResources.get("rename"),
      (newValue) => {
        if (newValue != null) {
          graph.cellLabelChanged(layer, newValue);
        }
      },
      mxResources.get("enterName")
    );
  }
}
