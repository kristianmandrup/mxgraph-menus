// import { EditorUI } from "ui/EditorUI";
import { Dialog } from "../../../Dialog";
import mx from "@mxgraph-app/mx";
import { IDimensions } from "../types";
import { LayerRefresher } from "./LayerRefresher";
import { LayerDuplicator } from "./LayerDuplicator";
import { LayerRemover } from "./LayerRemover";
import { LayerData } from "./LayerData";
import { LayerInserter } from "./LayerInserter";
import { LayerAdder } from "./LayerAdder";
const { mxWindow, mxResources, mxClient, mxEvent, mxRectangle } = mx;
/**
 *
 */
export class LayersWindow {
  window: any; // mxWindow (set in constructor)
  refreshLayers: any;

  editorUi: any;
  listDiv: any;

  compactUi = true; // EditorUI.compactUi
  checkmarkImage = true; // Editor.checkmarkImage
  div: any;
  ldiv: any;

  link: any;
  insertLink: any;
  removeLink: any;
  addLink: any;
  duplicateLink: any;
  dataLink: any;

  defaults = {
    dimensions: {
      x: 0,
      y: 0,
      w: 600,
      h: 400,
    },
  };

  selectionLayer: any;

  dropIndex: number = 0;
  layerCount: number = 0;

  get graph() {
    return this.editorUi.graph;
  }

  get documentMode() {
    return this.editorUi.documentMode;
  }

  layerRefresher: LayerRefresher;
  layerDuplicator: LayerDuplicator;
  layerRemover: LayerRemover;
  layerData: LayerData;
  layerInserter: LayerInserter;
  layerAdder: LayerAdder;

  dimensions: IDimensions;

  // TODO: extract into multiple smaller methods!
  constructor(editorUi, dimensions: IDimensions = {}) {
    this.dimensions = {
      ...this.defaults.dimensions,
      ...dimensions,
    };
    this.editorUi = editorUi;
    this.layerRefresher = new LayerRefresher(this);
    this.layerDuplicator = new LayerDuplicator(this);
    this.layerRemover = new LayerRemover(this);
    this.layerData = new LayerData(this);
    this.layerInserter = new LayerInserter(this);
    this.layerAdder = new LayerAdder(this);

    this.createDivs();
    this.createLinks();
    this.addClickHandlers();
    this.addDragDropHandlers();
    this.buildDiv();

    this.refresh();
    this.addGraphChangeHandlers();

    mxEvent.addListener(window, "resize", this.resizeListener);
  }

  initWindow() {
    const window = this.createWindow();
    this.setWindowProperties();

    this.window.addListener(mxEvent.SHOW, () => {
      this.window.fit();
    });

    // Make refresh available via instance
    this.refreshLayers = this.refresh;

    window.setLocation = (x, y) => {
      var iw =
        window.innerWidth ||
        document.body.clientWidth ||
        document.documentElement.clientWidth;
      var ih =
        window.innerHeight ||
        document.body.clientHeight ||
        document.documentElement.clientHeight;

      x = Math.max(0, Math.min(x, iw - window.table.clientWidth));
      y = Math.max(0, Math.min(y, ih - window.table.clientHeight - 48));

      if (window.getX() != x || window.getY() != y) {
        mxWindow.prototype.setLocation.apply(this, [x, y]);
      }
    };
  }

  setWindowProperties() {
    const { window } = this;
    window.minimumSize = new mxRectangle(0, 0, 120, 120);
    window.destroyOnClose = false;
    window.setMaximizable(false);
    window.setResizable(true);
    window.setClosable(true);
    window.setVisible(true);
  }

  createWindow() {
    // main div
    const { dimensions, div } = this;
    const { x, y, w, h } = dimensions;

    const window: any = new mxWindow(
      mxResources.get("layers"),
      div,
      x,
      y,
      w,
      h,
      true,
      true
    );
    this.window = window;
    return window;
  }

  refresh = () => {
    return this.layerRefresher.refresh;
  };

  get tbarHeight() {
    return !this.compactUi ? "30px" : "26px";
  }

  get backdropColor() {
    return Dialog.backdropColor;
  }

  createDivs() {
    this.createMainDiv();
    this.createListDiv();
    this.createLDiv();
  }

  // TODO: rename to mainDiv
  createMainDiv() {
    var div = document.createElement("div");
    div.style.userSelect = "none";
    div.style.background =
      Dialog.backdropColor == "white" ? "whiteSmoke" : Dialog.backdropColor;
    div.style.border = "1px solid whiteSmoke";
    div.style.height = "100%";
    div.style.marginBottom = "10px";
    div.style.overflow = "auto";
    this.div = div;
  }

  createListDiv() {
    const { div, tbarHeight, backdropColor } = this;

    var listDiv = document.createElement("div");
    listDiv.style.backgroundColor =
      Dialog.backdropColor == "white" ? "#dcdcdc" : backdropColor;
    listDiv.style.position = "absolute";
    listDiv.style.overflow = "auto";
    listDiv.style.left = "0px";
    listDiv.style.right = "0px";
    listDiv.style.top = "0px";
    listDiv.style.bottom = parseInt(tbarHeight) + 7 + "px";
    this.listDiv = listDiv;
    div.appendChild(listDiv);
  }

  createLDiv() {
    const { tbarHeight, compactUi } = this;
    var ldiv = document.createElement("div");

    ldiv.className = "geToolbarContainer";
    ldiv.style.position = "absolute";
    ldiv.style.bottom = "0px";
    ldiv.style.left = "0px";
    ldiv.style.right = "0px";
    ldiv.style.height = tbarHeight;
    ldiv.style.overflow = "hidden";
    ldiv.style.padding = !compactUi ? "1px" : "4px 0px 3px 0px";
    ldiv.style.backgroundColor =
      Dialog.backdropColor == "white" ? "whiteSmoke" : Dialog.backdropColor;
    ldiv.style.borderWidth = "1px 0px 0px 0px";
    ldiv.style.borderColor = "#c3c3c3";
    ldiv.style.borderStyle = "solid";
    ldiv.style.display = "block";
    ldiv.style.whiteSpace = "nowrap";

    if (mxClient.IS_QUIRKS) {
      ldiv.style.filter = "none";
    }
    this.ldiv = ldiv;
  }

  addDragDropHandlers() {
    const { div } = this;
    mxEvent.addListener(div, "dragover", (evt) => {
      evt.dataTransfer.dropEffect = "move";
      this.dropIndex = 0;
      evt.stopPropagation();
      evt.preventDefault();
    });

    // Workaround for "no element found" error in FF
    mxEvent.addListener(div, "drop", (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
    });
  }

  addClickHandlers() {
    this.addAddLinkClickHandler();
    this.addDataLinkClickHandler();
    this.addDuplicateLinkClickHandler();
    this.addInsertLinkClickHandler();
    this.addRemoveLinkClickHandler();
  }

  addInsertLinkClickHandler() {
    this.layerInserter.addClickHandler();
  }

  addRemoveLinkClickHandler() {
    this.layerRemover.addClickHandler();
  }

  addAddLinkClickHandler() {
    this.layerAdder.addClickHandler();
  }

  addDuplicateLinkClickHandler() {
    this.layerDuplicator.addClickHandler();
  }

  addDataLinkClickHandler() {
    this.layerData.addClickHandler();
  }

  createLinks() {
    this.createLink();
    this.createRemoveLink();
    this.createAddLink();
    this.createDataLink();
    this.createInsertLink();
    this.createDuplicateLink();
  }

  createLink() {
    var link = document.createElement("a");
    link.className = "geButton";

    if (mxClient.IS_QUIRKS) {
      link.style.filter = "none";
    }
    this.link = link;
  }

  createAddLink() {
    this.addLink = this.layerAdder.createLink();
  }

  createRemoveLink() {
    this.removeLink = this.layerRemover.createLink();
    return this.removeLink;
  }

  createInsertLink() {
    this.insertLink = this.layerInserter.createLink();
    return this.insertLink;
  }

  createDataLink() {
    this.dataLink = this.layerData.createLink();
    return this.dataLink;
  }

  createDuplicateLink() {
    this.duplicateLink = this.layerDuplicator.createLink();
  }

  buildLDiv() {
    const {
      ldiv,
      removeLink,
      addLink,
      dataLink,
      insertLink,
      duplicateLink,
    } = this;

    ldiv.appendChild(removeLink);
    ldiv.appendChild(insertLink);
    ldiv.appendChild(dataLink);
    ldiv.appendChild(duplicateLink);
    ldiv.appendChild(addLink);
  }

  buildDiv() {
    this.buildLDiv();
    this.div.appendChild(this.ldiv);
  }

  addGraphChangeHandlers() {
    const { graph, insertLink } = this;
    graph.model.addListener(mxEvent.CHANGE, () => {
      this.refresh();
    });

    graph.selectionModel.addListener(mxEvent.CHANGE, function () {
      if (graph.isSelectionEmpty()) {
        insertLink.className = "geButton mxDisabled";
      } else {
        insertLink.className = "geButton";
      }
    });
  }

  resizeListener = () => {
    var x = this.window.getX();
    var y = this.window.getY();

    this.window.setLocation(x, y);
  };

  init() {
    const { listDiv } = this;
    listDiv.scrollTop = listDiv.scrollHeight - listDiv.clientHeight;
  }

  destroy() {
    mxEvent.removeListener(window, "resize", this.resizeListener);
    this.window.destroy();
  }
}
