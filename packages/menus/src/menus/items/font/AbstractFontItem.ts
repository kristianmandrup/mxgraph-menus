export class AbstractFontItem {
  menu: any;
  graph: any;
  menuStyler: any;

  constructor(menu) {
    this.menuStyler = menu.menuStyler;
    this.menu = menu;
    this.graph = menu.graph;
  }

  // from Menus
  styleChange(menu, label, keys, values, sprite, parent, fn?, post?) {
    this.menuStyler.styleChange(
      menu,
      label,
      keys,
      values,
      sprite,
      parent,
      fn,
      post
    );
  }
}
