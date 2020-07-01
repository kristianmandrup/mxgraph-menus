import mx from "@mxgraph-app/mx";
const { mxUtils, mxResources } = mx;

/**
 * Constructs a new textarea dialog.
 */
export class TextareaDialog {
  textarea: any; // HtmlTextAreaElement
  container: any; // HtmlElement

  createNameInput() {
    const { noWrap, url, width, height } = this;
    var nameInput = document.createElement("textarea");

    if (noWrap) {
      nameInput.setAttribute("wrap", "off");
    }

    nameInput.setAttribute("spellcheck", "false");
    nameInput.setAttribute("autocorrect", "off");
    nameInput.setAttribute("autocomplete", "off");
    nameInput.setAttribute("autocapitalize", "off");

    mxUtils.write(nameInput, url || "");
    nameInput.style.resize = "none";
    nameInput.style.width = width + "px";
    nameInput.style.height = height + "px";
    this.nameInput = nameInput;
    return nameInput;
  }

  nameInput: any;
  title: string = "no title";
  url: string = "www.jgraph.com";
  height: number = 600;
  width: number = 400;
  noWrap: any;
  noHide: any;
  cancelFn?: () => void;
  cancelTitle: string = "cancel";
  addButtons: any;
  applyTitle: string = "apply";
  helpLink: string = "/help";
  customButtons: any;

  createTitle() {
    const { title } = this;
    const td = document.createElement("td");
    td.style.fontSize = "10pt";
    td.style.width = "100px";
    mxUtils.write(td, title);
    return td;
  }

  init = () => {
    const { nameInput } = this;
    nameInput.focus();
    nameInput.scrollTop = 0;
  };

  get graph() {
    return this.editorUi.editor.graph;
  }

  appendHelpBtn() {
    const { editorUi, btnsWrapper, helpLink } = this;
    if (!helpLink) return;
    var helpBtn = mxUtils.button(mxResources.get("help"), function () {
      editorUi.editor.graph.openLink(helpLink);
    });
    helpBtn.className = "geBtn";

    btnsWrapper.appendChild(helpBtn);
    return btnsWrapper;
  }

  editorUi: any;

  appendCustomBtn = (label, fn) => {
    const { btnsWrapper, nameInput } = this;
    var customBtn = mxUtils.button(label, function (e) {
      fn(e, nameInput);
    });
    customBtn.className = "geBtn";

    btnsWrapper.appendChild(customBtn);
  };

  btnsWrapper: any;

  get cancelFirst() {
    return this.editorUi.editor.cancelFirst;
  }

  createCancelBtn() {
    const { cancelTitle, editorUi, cancelFn } = this;
    var cancelBtn = mxUtils.button(
      cancelTitle || mxResources.get("cancel"),
      () => {
        editorUi.hideDialog();

        if (cancelFn != null) {
          cancelFn();
        }
      }
    );
    cancelBtn.className = "geBtn";
    this.cancelBtn = cancelBtn;
    return cancelBtn;
  }

  cancelBtn: any;
  fn: any;

  appendCancelBtn() {
    const { cancelFirst } = this;
    const cancelBtn = this.createCancelBtn();
    if (cancelFirst) {
      this.btnsWrapper.appendChild(cancelBtn);
    }
  }

  constructor(editorUi, opts: any = {}) {
    this.editorUi = editorUi;
    this.configure(opts);

    var row, td;

    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    row = document.createElement("tr");

    const title = this.createTitle();

    row.appendChild(title);
    tbody.appendChild(row);

    row = document.createElement("tr");

    const nameWrapper = document.createElement("td");

    const { nameInput } = this;
    this.textarea = nameInput;

    nameWrapper.appendChild(nameInput);
    row.appendChild(nameWrapper);

    tbody.appendChild(row);

    row = document.createElement("tr");

    const btnsWrapper = document.createElement("td");
    btnsWrapper.style.paddingTop = "14px";
    btnsWrapper.style.whiteSpace = "nowrap";
    btnsWrapper.setAttribute("align", "right");
    this.btnsWrapper = btnsWrapper;

    const { customButtons } = this;

    if (customButtons != null) {
      for (var i = 0; i < customButtons.length; i++) {
        this.appendCustomBtn(customButtons[i][0], customButtons[i][1]);
      }
    }

    const { cancelBtn, fn, addButtons, applyTitle, noHide } = this;

    if (addButtons != null) {
      addButtons(td, nameInput);
    }

    if (fn != null) {
      var genericBtn = mxUtils.button(
        applyTitle || mxResources.get("apply"),
        function () {
          if (!noHide) {
            editorUi.hideDialog();
          }

          fn(nameInput.value);
        }
      );

      genericBtn.className = "geBtn gePrimaryBtn";
      td.appendChild(genericBtn);
    }

    if (!editorUi.editor.cancelFirst) {
      td.appendChild(cancelBtn);
    }

    row.appendChild(td);
    tbody.appendChild(row);
    table.appendChild(tbody);
    this.container = table;
  }

  configure(opts) {
    let {
      title,
      url,
      w,
      h,
      fn,
      noHide,
      noWrap,
      cancelFn,
      cancelTitle,
      addButtons,
      applyTitle,
      helpLink,
      customButtons,
    } = opts;
    w = w != null ? w : 300;
    h = h != null ? h : 120;
    noHide = noHide != null ? noHide : false;

    this.customButtons = customButtons;
    this.helpLink = helpLink;
    this.applyTitle = applyTitle;
    this.addButtons = addButtons;
    this.cancelTitle = cancelTitle;
    this.cancelFn = cancelFn;
    this.fn = fn;
    this.noHide = noHide;
    this.title = title;
    this.url = url;
    this.height = h;
    this.width = w;
    this.noWrap = noWrap;
  }
}
