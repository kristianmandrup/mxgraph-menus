export class BaseDialogControl {
  dialog: any;

  constructor(dialog: any) {
    this.dialog = dialog;
  }

  get graph() {
    return this.dialog.graph;
  }

  get ui() {
    return this.dialog.ui;
  }
}
