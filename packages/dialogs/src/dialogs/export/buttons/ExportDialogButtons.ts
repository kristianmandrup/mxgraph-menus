import { ExportDialog } from "../ExportDialog";
import { SaveBtn } from "./SaveBtn";
import { CancelBtn } from "./CancelBtn";
import { BaseControl } from "../BaseControl";

export class ExportDialogButtons extends BaseControl {
  btnContainer: any;
  cancelBtn: any;
  saveBtn: any;

  constructor(dialog: ExportDialog) {
    super(dialog);
    this.saveBtn = new SaveBtn(dialog);
    this.cancelBtn = new CancelBtn(dialog);
  }

  get ui() {
    return this.dialog.ui;
  }

  createButtonsWrapper() {
    const row = document.createElement("tr");
    const td = document.createElement("td");
    td.setAttribute("align", "right");
    td.style.paddingTop = "22px";
    td.colSpan = 2;
    row.appendChild(td);
    this.btnContainer = td;
    return row;
  }

  createRow() {
    const row = this.createButtonsWrapper();
    this.appendAndLayoutButtons();
    return this.appendRow(row);
  }

  appendBtn(btn, btnContainer?) {
    btnContainer = btnContainer || this.btnContainer;
    btnContainer.appendChild(btn);
  }

  get cancelFirst() {
    const { ui } = this;
    return ui.editor.cancelFirst;
  }

  appendAndLayoutButtons() {
    const { cancelBtn, saveBtn, cancelFirst } = this;
    if (cancelFirst) {
      this.appendBtn(cancelBtn);
      this.appendBtn(saveBtn);
    } else {
      this.appendBtn(saveBtn);
      this.appendBtn(cancelBtn);
    }
  }
}
