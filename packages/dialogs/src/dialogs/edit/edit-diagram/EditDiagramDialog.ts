import mx from "@mxgraph-app/mx";
const { mxUtils, mxResources } = mx;
const Graph: any = {};
import { OkBtn } from "./OkBtn";

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

  configureFileDropSupport() {
    const { textarea, editorUi } = this;
    // Enables dropping files
    if (Graph.fileSupport) {
      function handleDrop(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        if (evt.dataTransfer.files.length > 0) {
          var file = evt.dataTransfer.files[0];
          var reader = new FileReader();

          reader.onload = (e: any) => {
            textarea.value = e.target.result;
          };

          reader.readAsText(file);
        } else {
          textarea.value = editorUi.extractGraphModelFromEvent(evt);
        }
      }

      function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      }

      // Setup the dnd listeners.
      textarea.addEventListener("dragover", handleDragOver, false);
      textarea.addEventListener("drop", handleDrop, false);
    }
  }

  get graph() {
    return this.editorUi.editor.graph;
  }

  get ui() {
    return this.editorUi;
  }

  constructor(editorUi) {
    this.editorUi = editorUi;
    var div = document.createElement("div");
    div.style.textAlign = "right";
    const textarea = this.createTextArea();
    div.appendChild(textarea);

    this.init = () => {
      textarea.focus();
    };

    this.configureFileDropSupport();

    var cancelBtn = mxUtils.button(mxResources.get("cancel"), function () {
      editorUi.hideDialog();
    });
    cancelBtn.className = "geBtn";

    if (editorUi.editor.cancelFirst) {
      div.appendChild(cancelBtn);
    }

    const select = this.createSelect();

    if (editorUi.editor.graph.isEnabled()) {
      var replaceOption = document.createElement("option");
      replaceOption.setAttribute("value", "replace");
      mxUtils.write(replaceOption, mxResources.get("replaceExistingDrawing"));
      select.appendChild(replaceOption);
    }

    var newOption = document.createElement("option");
    newOption.setAttribute("value", "new");
    mxUtils.write(newOption, mxResources.get("openInNewWindow"));

    if (EditDiagramDialog.showNewWindowOption) {
      select.appendChild(newOption);
    }

    if (editorUi.editor.graph.isEnabled()) {
      var importOption = document.createElement("option");
      importOption.setAttribute("value", "import");
      mxUtils.write(importOption, mxResources.get("addToExistingDrawing"));
      select.appendChild(importOption);
    }

    div.appendChild(select);
    const okBtn = this.createOkBtn();

    div.appendChild(okBtn);

    if (!editorUi.editor.cancelFirst) {
      div.appendChild(cancelBtn);
    }

    this.container = div;
  }

  select: any;

  createSelect() {
    var select = document.createElement("select");
    select.style.width = "180px";
    select.className = "geBtn";
    this.select = select;
    return select;
  }

  createOkBtn() {
    return new OkBtn(this).btn;
  }

  /**
   *
   */
  static showNewWindowOption = true;
}
