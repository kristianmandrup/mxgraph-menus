// import { EditorUI } from "ui/EditorUI";
import { Dialog } from "../../../Dialog";
import mx from "@mxgraph-app/mx";
import { IDimensions } from "../types";
import { LayerRefresher } from "./LayerRefresher";
const {
  mxWindow,
  mxPopupMenu,
  mxUtils,
  mxResources,
  mxClient,
  mxEvent,
  mxCell,
  mxRectangle,
} = mx;
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
  dimensions: IDimensions;

  // TODO: extract into multiple smaller methods!
  constructor(editorUi, dimensions: IDimensions = {}) {
    this.dimensions = {
      ...this.defaults.dimensions,
      ...dimensions,
    };
    this.editorUi = editorUi;
    this.layerRefresher = new LayerRefresher(this);

    this.createDivs();
    this.createLinks();
    this.addClickHandlers();
    this.addDragDropHandlers();
    this.buildDiv();

    this.refresh();
    this.addGraphListeners();

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
    const { editorUi, layerCount, insertLink, graph, checkmarkImage } = this;
    mxEvent.addListener(insertLink, "click", (evt) => {
      if (graph.isEnabled() && !graph.isSelectionEmpty()) {
        editorUi.editor.graph.popupMenuHandler.hideMenu();

        var menu: any = new mxPopupMenu((menu, parent) => {
          for (var i = layerCount - 1; i >= 0; i--) {
            const add = (child) => {
              var item = menu.addItem(
                graph.convertValueToString(child) ||
                  mxResources.get("background"),
                null,
                () => {
                  graph.moveCells(
                    graph.getSelectionCells(),
                    0,
                    0,
                    false,
                    child
                  );
                },
                parent
              );

              if (
                graph.getSelectionCount() == 1 &&
                graph.model.isAncestor(child, graph.getSelectionCell())
              ) {
                menu.addCheckmark(item, checkmarkImage);
              }
            };
            add(graph.model.getChildAt(graph.model.root, i));
          }
        });
        menu.div.className += " geMenubarMenu";
        menu.smartSeparators = true;
        menu.showDisabled = true;
        menu.autoExpand = true;

        // Disables autoexpand and destroys menu when hidden
        menu.hideMenu = () => {
          mxPopupMenu.prototype.hideMenu.apply(menu, []);
          menu.destroy();
        };

        var offset = mxUtils.getOffset(insertLink);
        menu.popup(offset.x, offset.y + insertLink.offsetHeight, null, evt);

        // Allows hiding by clicking on document
        editorUi.setCurrentMenu(menu);
      }
    });
  }

  addRemoveLinkClickHandler() {
    const { selectionLayer, removeLink, graph } = this;
    mxEvent.addListener(removeLink, "click", function (evt) {
      if (graph.isEnabled()) {
        graph.model.beginUpdate();
        try {
          var index = graph.model.root.getIndex(selectionLayer);
          graph.removeCells([selectionLayer], false);

          // Creates default layer if no layer exists
          if (graph.model.getChildCount(graph.model.root) == 0) {
            graph.model.add(graph.model.root, new mxCell());
            graph.setDefaultParent(null);
          } else if (
            index > 0 &&
            index <= graph.model.getChildCount(graph.model.root)
          ) {
            graph.setDefaultParent(
              graph.model.getChildAt(graph.model.root, index - 1)
            );
          } else {
            graph.setDefaultParent(null);
          }
        } finally {
          graph.model.endUpdate();
        }
      }

      mxEvent.consume(evt);
    });
  }

  addAddLinkClickHandler() {
    const { addLink, graph } = this;
    mxEvent.addListener(addLink, "click", function (evt) {
      if (graph.isEnabled()) {
        graph.model.beginUpdate();

        try {
          var cell = graph.addCell(
            new mxCell(mxResources.get("untitledLayer")),
            graph.model.root
          );
          graph.setDefaultParent(cell);
        } finally {
          graph.model.endUpdate();
        }
      }

      mxEvent.consume(evt);
    });
  }

  addDuplicateLinkClickHandler() {
    const { duplicateLink, graph, selectionLayer } = this;
    mxEvent.addListener(duplicateLink, "click", (_evt) => {
      if (graph.isEnabled()) {
        var newCell: any;
        graph.model.beginUpdate();
        try {
          newCell = graph.cloneCell(selectionLayer);
          graph.cellLabelChanged(newCell, mxResources.get("untitledLayer"));
          newCell.setVisible(true);
          newCell = graph.addCell(newCell, graph.model.root);
          graph.setDefaultParent(newCell);
        } finally {
          graph.model.endUpdate();
        }

        if (newCell != null && !graph.isCellLocked(newCell)) {
          graph.selectAll(newCell);
        }
      }
    });
  }

  addDataLinkClickHandler() {
    const { dataLink, graph, editorUi, selectionLayer } = this;
    mxEvent.addListener(dataLink, "click", (evt) => {
      if (graph.isEnabled()) {
        editorUi.showDataDialog(selectionLayer);
      }

      mxEvent.consume(evt);
    });
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
    const { link, graph } = this;
    var addLink: any = link.cloneNode();
    addLink.innerHTML =
      '<div class="geSprite geSprite-plus" style="display:inline-block;"></div>';
    addLink.setAttribute("title", mxResources.get("addLayer"));

    if (!graph.isEnabled()) {
      addLink.className = "geButton mxDisabled";
    }
    this.addLink = addLink;
  }

  createRemoveLink() {
    const { link, graph } = this;
    var removeLink: any = link.cloneNode();
    removeLink.innerHTML =
      '<div class="geSprite geSprite-delete" style="display:inline-block;"></div>';

    if (!graph.isEnabled()) {
      removeLink.className = "geButton mxDisabled";
    }
    this.removeLink = removeLink;
  }

  createInsertLink() {
    const { link } = this;
    var insertLink: any = link.cloneNode();
    insertLink.setAttribute(
      "title",
      mxUtils.trim(mxResources.get("moveSelectionTo", [""]))
    );
    insertLink.innerHTML =
      '<div class="geSprite geSprite-insert" style="display:inline-block;"></div>';
    this.insertLink = insertLink;
  }

  createDataLink() {
    const { link, graph } = this;
    var dataLink: any = link.cloneNode();
    dataLink.innerHTML =
      '<div class="geSprite geSprite-dots" style="display:inline-block;"></div>';
    dataLink.setAttribute("title", mxResources.get("rename"));

    if (!graph.isEnabled()) {
      dataLink.className = "geButton mxDisabled";
    }
    this.dataLink = dataLink;
  }

  createDuplicateLink() {
    const { link, graph } = this;

    var duplicateLink: any = link.cloneNode();
    duplicateLink.innerHTML =
      '<div class="geSprite geSprite-duplicate" style="display:inline-block;"></div>';

    if (!graph.isEnabled()) {
      duplicateLink.className = "geButton mxDisabled";
    }
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

  addGraphListeners() {
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
