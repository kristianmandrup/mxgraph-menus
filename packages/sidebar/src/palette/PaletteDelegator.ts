import { Sidebar } from "../Sidebar";

export abstract class PaletteDelegator {
  sidebar: Sidebar;
  constructor(sidebar: Sidebar) {
    this.sidebar = sidebar;
  }

  get collapsedImage() {
    return this.sidebar.collapsedImage;
  }

  get expandedImage() {
    return this.sidebar.expandedImage;
  }

  get palettes() {
    return this.sidebar.palettes;
  }

  get documentMode() {
    return this.sidebar.documentMode;
  }

  get container() {
    return this.sidebar.container;
  }

  /**
   * Creates and returns the given title element.
   */
  createTitle(label) {
    return this.sidebar.createTitle(label);
  }
}
