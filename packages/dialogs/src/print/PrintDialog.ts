import mx from "@mxgraph-app/mx";
const {
  mxRectangle,
  mxPrintPreview,
  mxUtils,
  mxResources,
  mxConstants,
  mxClient,
} = mx;

/**
 * Constructs a new print dialog.
 */
export class PrintDialog {
  container: any;
  pageCountCheckBox: any;
  pageScaleInput: any;
  pageCountInput: any;

  static formats: any;
  static customSize: any;
  static currentPageFormat: any;
  static portraitCheckBox: any;
  static pageFormatListener: any;
  static formatDiv: any;
  static customDiv: any;
  static widthInput: any;
  static heightInput: any;
  static landscapeCheckBox: any;
  static paperSizeSelect: any;
  static pageFormat: any;
  static pf: any;

  /**
   * Specifies if the preview button should be enabled. Default is true.
   */
  static previewEnabled = true;

  editorUi: any;

  get graph() {
    return this.editorUi.editor.graph;
  }

  constructor(editorUi, title: string) {
    this.create(editorUi, title);
  }

  table: any;

  createTable() {
    var table = document.createElement("table");
    table.style.width = "100%";
    table.style.height = "100%";
    this.table = table;
    return table;
  }

  tableBody: any;

  createTableBody() {
    var tbody = document.createElement("tbody");
    this.tableBody = tbody;
    return tbody;
  }

  appendOnePage(_row) {}

  createPageCountCheckBox() {
    var pageCountCheckBox = document.createElement("input");
    pageCountCheckBox.setAttribute("type", "checkbox");
    this.pageCountCheckBox = pageCountCheckBox;
    return pageCountCheckBox;
  }

  onePageCheckBox: any;

  createOnePageCheckBox() {
    var onePageCheckBox = document.createElement("input");
    onePageCheckBox.setAttribute("type", "checkbox");
    this.onePageCheckBox = onePageCheckBox;
    return onePageCheckBox;
  }

  /**
   * Constructs a new print dialog.
   */
  create(editorUi, _title) {
    this.editorUi = editorUi;
    var row, td;

    const table = this.createTable();
    const tbody = this.createTableBody();
    // const onePageCheckBox = this.createOnePageCheckBox();
    const pageCountCheckBox = this.createPageCountCheckBox();

    row = document.createElement("tr");
    this.appendOnePage(row);

    tbody.appendChild(row);

    row = row.cloneNode(false);

    td = document.createElement("td");
    td.style.fontSize = "10pt";
    td.appendChild(pageCountCheckBox);

    row.appendChild(td);

    // row = row.cloneNode(false);

    const { preview } = this;

    if (PrintDialog.previewEnabled) {
      var previewBtn = mxUtils.button(mxResources.get("preview"), () => {
        editorUi.hideDialog();
        preview(false);
      });
      previewBtn.className = "geBtn";
      td.appendChild(previewBtn);
    }

    var printBtn = mxUtils.button(
      mxResources.get(!PrintDialog.previewEnabled ? "ok" : "print"),
      () => {
        editorUi.hideDialog();
        preview(true);
      }
    );
    printBtn.className = "geBtn gePrimaryBtn";
    td.appendChild(printBtn);

    row.appendChild(td);
    tbody.appendChild(row);

    table.appendChild(tbody);
    this.container = table;
  }

  // Overall scale for print-out to account for print borders in dialogs etc
  preview(print = false) {
    const {
      graph,
      pageCountCheckBox,
      onePageCheckBox,
      pageScaleInput,
      pageCountInput,
    } = this;
    var autoOrigin = onePageCheckBox.checked || pageCountCheckBox.checked;
    var printScale = parseInt(pageScaleInput.value) / 100;

    if (isNaN(printScale)) {
      printScale = 1;
      pageScaleInput.value = "100%";
    }

    // Workaround to match available paper size in actual print output
    printScale *= 0.75;

    var pf = graph.pageFormat || mxConstants.PAGE_FORMAT_A4_PORTRAIT;
    var scale = 1 / graph.pageScale;

    if (autoOrigin) {
      var pageCount = onePageCheckBox.checked
        ? 1
        : parseInt(pageCountInput.value);

      if (!isNaN(pageCount)) {
        scale = mxUtils.getScaleForPageCount(pageCount, graph, pf, undefined);
      }
    }

    // Negative coordinates are cropped or shifted if page visible
    // var gb = graph.getGraphBounds();
    var border = 0;
    var x0 = 0;
    var y0 = 0;

    // Applies print scale
    pf = mxRectangle.fromRectangle(pf);
    pf.width = Math.ceil(pf.width * printScale);
    pf.height = Math.ceil(pf.height * printScale);
    scale *= printScale;

    // Starts at first visible page
    if (!autoOrigin && graph.pageVisible) {
      var layout = graph.getPageLayout();
      x0 -= layout.x * pf.width;
      y0 -= layout.y * pf.height;
    } else {
      autoOrigin = true;
    }

    var preview = PrintDialog.createPrintPreview(
      graph,
      scale,
      pf,
      border,
      x0,
      y0,
      autoOrigin
    );
    preview.open();

    if (print) {
      PrintDialog.printPreview(preview);
    }
  }

  /**
   * Constructs a new print dialog.
   */
  static printPreview(preview) {
    try {
      if (preview.wnd != null) {
        var printFn = function () {
          preview.wnd.focus();
          preview.wnd.print();
          preview.wnd.close();
        };

        // Workaround for Google Chrome which needs a bit of a
        // delay in order to render the SVG contents
        // Needs testing in production
        if (mxClient.IS_GC) {
          window.setTimeout(printFn, 500);
        } else {
          printFn();
        }
      }
    } catch (e) {
      // ignores possible Access Denied
    }
  }

  /**
   * Constructs a new print dialog.
   */
  static createPrintPreview(graph, scale, pf, border, x0, y0, autoOrigin) {
    var preview: any = new mxPrintPreview(graph, scale, pf, border, x0, y0);
    preview.title = mxResources.get("preview");
    preview.printBackgroundImage = true;
    preview.autoOrigin = autoOrigin;
    var bg = graph.background;

    if (bg == null || bg == "" || bg == mxConstants.NONE) {
      bg = "#ffffff";
    }

    preview.backgroundColor = bg;

    var writeHead = preview.writeHead;

    // Adds a border in the preview
    preview.writeHead = function (doc) {
      writeHead.apply(this, arguments);

      doc.writeln('<style type="text/css">');
      doc.writeln("@media screen {");
      doc.writeln("  body > div { padding:30px;box-sizing:content-box; }");
      doc.writeln("}");
      doc.writeln("</style>");
    };

    return preview;
  }
}
