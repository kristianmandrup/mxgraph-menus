import { ExportDialog } from "./ExportDialog";

export class BaseControl {
  dialog: ExportDialog;

  constructor(dialog: ExportDialog) {
    this.dialog = dialog;
  }

  get graph() {
    return this.dialog.graph;
  }

  get graphSize() {
    return this.dialog.graphSize;
  }

  get ui() {
    return this.dialog.ui;
  }

  get tbody() {
    return this.dialog.tbody;
  }

  get scale() {
    return this.graphSize.scale;
  }

  get bounds() {
    return this.graphSize.bounds;
  }

  createRow() {
    return document.createElement("tr");
  }

  createCell() {
    return document.createElement("td");
  }

  createInput() {
    return document.createElement("input");
  }

  appendRow(row) {
    const { tbody } = this;
    tbody.appendChild(row);
    return tbody;
  }

  appendCell(row, td) {
    row.appendChild(td);
    return row;
  }
}
