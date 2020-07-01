export class DialogButtons {
  dialog: any;

  btnContainer: any;
  cancelBtn: any;
  btns: any[];

  constructor(dialog: any, btnContainer?: any, cancelBtn?: any, btns?: any[]) {
    this.dialog = dialog;
    this.btnContainer = btnContainer;
    this.cancelBtn = cancelBtn;
    this.btns = btns || [];
  }

  get ui() {
    return this.dialog.ui;
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
    const { cancelFirst, btns, cancelBtn, appendBtns } = this;
    const orderedBtns = cancelFirst
      ? [cancelBtn, ...btns]
      : [...btns, cancelBtn].reverse();
    appendBtns(orderedBtns);
  }

  appendBtns(btns: any[]) {
    btns.map((btn) => this.appendBtn(btn));
  }
}
