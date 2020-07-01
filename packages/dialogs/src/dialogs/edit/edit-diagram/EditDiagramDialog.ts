import mx from "@mxgraph-app/mx";
const { mxUtils, mxResources } = mx;
export const Graph: any = {};
import { OkBtn } from "./OkButton";
import { FileDrop } from "./FileDrop";
import { ActionSelector } from "./ActionSelector";

/**
 * Constructs a new edit file dialog.
 */
export class EditDiagramDialog {
  container: any;
  init: () => void;

  textarea: any;

  createTextArea() {
    const { editorUi } = this;
    var textarea: any = document.createElement("textarea");
    textarea.setAttribute("wrap", "off");
    textarea.setAttribute("spellcheck", "false");
    textarea.setAttribute("autocorrect", "off");
    textarea.setAttribute("autocomplete", "off");
    textarea.setAttribute("autocapitalize", "off");
    textarea.style.overflow = "auto";
    textarea.style.resize = "none";
    textarea.style.width = "600px";
    textarea.style.height = "360px";
    textarea.style.marginBottom = "16px";

    textarea.value = mxUtils.getPrettyXml(editorUi.editor.getGraphXml());
    this.textarea = textarea;
    return textarea;
  }

  editorUi: any;

  get graph() {
    return this.editorUi.editor.graph;
  }

  get ui() {
    return this.editorUi;
  }

  fileDrop: FileDrop;

  constructor(editorUi) {
    this.editorUi = editorUi;
    var div = document.createElement("div");
    div.style.textAlign = "right";
    const textarea = this.createTextArea();
    div.appendChild(textarea);

    this.init = () => {
      textarea.focus();
    };

    this.fileDrop = new FileDrop(this);

    const select = this.appendActionSelector();
    div.appendChild(select);

    const okBtn = this.createOkBtn();

    div.appendChild(okBtn);

    this.container = div;
  }

  appendActionSelector() {
    const actionSelector = this.createActionSelector();
    return actionSelector.createSelector();
  }

  createActionSelector() {
    return new ActionSelector(this);
  }

  cancelBtn: any;

  createCancelBtn() {
    var cancelBtn = mxUtils.button(mxResources.get("cancel"), () => {
      this.editorUi.hideDialog();
    });
    cancelBtn.className = "geBtn";
    this.cancelBtn = cancelBtn;
    return cancelBtn;
  }

  createOkBtn() {
    return new OkBtn(this).btn;
  }

  /**
   *
   */
  static showNewWindowOption = true;
}
