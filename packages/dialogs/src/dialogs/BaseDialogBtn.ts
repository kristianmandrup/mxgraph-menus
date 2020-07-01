export class BaseDialogBtn {
  dialog: any;
  btn: any;

  constructor(dialog: any) {
    this.dialog = dialog;
    this.createBtn();
    this.configure();
  }

  get ui() {
    return this.dialog.ui;
  }

  createBtn() {}

  configure() {}
}
