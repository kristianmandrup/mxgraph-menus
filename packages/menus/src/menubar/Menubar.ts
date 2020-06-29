import mx from "@mxgraph-app/mx";
import { IEditorUI } from "../interfaces";
import { IElement } from "./types";
const { mxClient, mxPopupMenu, mxEvent, mxUtils } = mx;

/**
 * Construcs a new menubar for the given editor.
 */
export class Menubar {
  editorUi: IEditorUI;
  container: HTMLElement;
  currentElt: any;
  show: any;
  /**
   * @param  {IEditorUI} editorUi
   * @param  {HTMLElement} container
   */
  constructor(editorUi: IEditorUI, container: HTMLElement) {
    this.editorUi = editorUi;
    if (!container) {
      throw new Error("Menubar must be created with a container element");
    }
    this.container = container;
  }

  /**
   * Adds the menubar elements.
   */
  hideMenu() {
    this.editorUi.hideCurrentMenu();
  }

  /**
   * Adds a submenu to this menubar.
   */
  /**
   * @param  {string} label
   * @param  {any} funct
   * @param  {any} before
   * @returns { HTMLElement} menu element
   */
  addMenu(label: string, funct: () => void, before?): HTMLElement {
    const { container } = this;
    var elem = document.createElement("a");
    elem.className = "geItem";
    mxUtils.write(elem, label);
    this.addMenuHandler(elem, funct);
    if (!container) {
      throw new Error("Menubar missing container");
    }

    if (before != null) {
      container.insertBefore(elem, before);
    } else {
      container.appendChild(elem);
    }

    return elem;
  }

  /**
   * Adds a handler for showing a menu in the given element.
   */
  addMenuHandler(elem: IElement, funct: () => void) {
    if (funct != null) {
      this.show = true;

      const { show } = this;

      const { addListener } = this;

      var clickHandler = (evt: Event) => {
        if ((show && elem.enabled == null) || elem.enabled) {
          this.editorUi.editor.graph.popupMenuHandler.hideMenu();
          var menu: any = new mxPopupMenu(funct);
          menu.div.className += " geMenubarMenu";
          menu.smartSeparators = true;
          menu.showDisabled = true;
          menu.autoExpand = true;

          // Disables autoexpand and destroys menu when hidden
          menu.hideMenu = () => {
            mxPopupMenu.prototype.hideMenu.apply(menu, []);
            this.editorUi.resetCurrentMenu();
            menu.destroy();
          };

          var offset = mxUtils.getOffset(elem);
          menu.popup(offset.x, offset.y + elem.offsetHeight, null, evt);
          this.editorUi.setCurrentMenu(menu, elem);
        }

        mxEvent.consume(evt);
      };

      // Shows menu automatically while in expanded state
      addListener(elem, "mousemove", (evt: Event) => {
        if (
          this.editorUi.currentMenu != null &&
          this.editorUi.currentMenuElt != elem
        ) {
          this.editorUi.hideCurrentMenu();
          clickHandler(evt);
        }
      });

      this.setMouseDown(elem);

      addListener(elem, "click", (evt: Event) => {
        clickHandler(evt);
        this.show = true;
      });
    }
  }

  addListener(
    element: HTMLElement,
    eventName: string,
    handler: (evt: Event) => void
  ) {
    mxEvent.addListener(element, eventName, handler);
  }
  /**
   * @param  {HTMLElement} elem
   */
  setMouseDown(elem: HTMLElement) {
    // Hides menu if already showing and prevents focus
    this.addListener(
      elem,
      mxClient.IS_POINTER ? "pointerdown" : "mousedown",
      (evt: Event) => {
        this.show = this.currentElt != elem;
        evt.preventDefault();
      }
    );
  }

  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  destroy() {
    // do nothing
  }
}
