import { LayersWindow } from "./LayersWindow";
import mx from "@mxgraph-app/mx";
import { AddLayerManager } from "./AddLayerManager";
const { mxResources } = mx;

export class LayerRefresher {
  layersWindow: LayersWindow;
  graph: any;
  layerCount: number = 0;
  dragSource: any;

  constructor(layersWindow: LayersWindow) {
    this.layersWindow = layersWindow;
    this.graph = layersWindow.graph;
  }

  set dropIndex(index) {
    this.layersWindow.dropIndex = index;
  }

  get listDiv() {
    return this.layersWindow.listDiv;
  }

  get backdropColor() {
    return this.layersWindow.backdropColor;
  }

  get selectionLayer() {
    return this.layersWindow.selectionLayer;
  }

  get removeLink() {
    return this.layersWindow.removeLink;
  }

  get duplicateLink() {
    return this.layersWindow.duplicateLink;
  }

  get insertLink() {
    return this.layersWindow.insertLink;
  }

  get dataLink() {
    return this.layersWindow.dataLink;
  }

  addLayer = (index, label, child, defaultParent) => {
    new AddLayerManager(this.layersWindow).addLayer(
      index,
      label,
      child,
      defaultParent
    );
  };

  refresh = () => {
    const { graph, listDiv } = this;
    this.layerCount = graph.model.getChildCount(graph.model.root);
    listDiv.innerHTML = "";

    const { selectionLayer, layerCount } = this;

    // Cannot be moved or deleted
    for (var i = layerCount - 1; i >= 0; i--) {
      const add = (child) => {
        this.addLayer(
          i,
          graph.convertValueToString(child) || mxResources.get("background"),
          child,
          child
        );
      };
      add(graph.model.getChildAt(graph.model.root, i));
    }

    const { removeLink, duplicateLink, dataLink, insertLink } = this;

    var label =
      graph.convertValueToString(selectionLayer) ||
      mxResources.get("background");
    removeLink.setAttribute("title", mxResources.get("removeIt", [label]));
    duplicateLink.setAttribute(
      "title",
      mxResources.get("duplicateIt", [label])
    );
    dataLink.setAttribute("title", mxResources.get("editData"));

    if (graph.isSelectionEmpty()) {
      insertLink.className = "geButton mxDisabled";
    }
  };
}
