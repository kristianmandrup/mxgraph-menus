import mx from "@mxgraph-app/mx";
const { mxEventSource, mxEventObject } = mx;

/**
 * Constructs a new action for the given parameters.
 */
export class Menu {
  funct: any;
  enabled: any;
  eventSource: any;
  editorUi: any;

  defaultFunction = () => {};

  constructor(editorUi: any, funct?: any, enabled?: boolean) {
    this.editorUi = editorUi;
    this.eventSource = new mxEventSource(this);
    this.funct = funct || this.defaultFunction;
    this.enabled = enabled != null ? enabled : true;
  }

  addListener(name, func: () => void) {
    this.eventSource.addListener(name, func);
  }

  /**
   * Sets the enabled state of the action and fires a stateChanged event.
   */
  isEnabled() {
    return this.enabled;
  }

  /**
   * Sets the enabled state of the action and fires a stateChanged event.
   */
  setEnabled(value: boolean) {
    if (this.enabled != value) {
      this.enabled = value;
      this.fireEvent("stateChanged");
    }
  }

  fireEvent(event: string) {
    this.eventSource.fireEvent(new mxEventObject(event));
  }

  /**
   * Executes menu action on parent
   */
  execute(menu: any, parent: any) {
    this.funct(menu, parent);
  }
}
