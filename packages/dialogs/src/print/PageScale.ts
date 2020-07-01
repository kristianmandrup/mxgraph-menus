import mx from "@mxgraph-app/mx";
import { BasePrintDialogControl } from "./BasePrintDialogControl";
const { mxUtils, mxResources } = mx;

export class PageScale extends BasePrintDialogControl {
  label: any;
  inputWrapper: any;
  pageScaleInput: any;

  createPageScaleLabel() {
    const td = document.createElement("td");
    mxUtils.write(td, mxResources.get("pageScale") + ":");
    this.label = td;
    return td;
  }

  appendLabel() {
    const label = this.createPageScaleLabel();
    return this.appendRow(label);
  }

  createInput() {
    const td = document.createElement("td");
    this.inputWrapper = td;
    var pageScaleInput = document.createElement("input");
    pageScaleInput.setAttribute("value", "100 %");
    pageScaleInput.setAttribute("size", "5");
    pageScaleInput.style.width = "50px";
    this.pageScaleInput = pageScaleInput;
    return pageScaleInput;
  }

  appendInput() {
    const { inputWrapper, pageScaleInput } = this;
    inputWrapper.appendChild(pageScaleInput);
    return inputWrapper;
  }
}
