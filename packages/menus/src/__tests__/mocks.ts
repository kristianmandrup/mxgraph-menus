const action = {};
const actions = {
  getAction(_key: string): any {
    return action;
  },
};
const parent = {};
const popupMenuHandler = {
  hideMenu(): void {},
};

const view = {
  getState(): any {
    return {};
  },
};
const model = {
  getChildCount(_cells: any) {
    return 0;
  },
};
const cell = {};

const textarea = document.createElement("textarea");

const cellEditor = {
  textarea,
  isContentEditing(): boolean {
    return true;
  },
  saveSelection(): void {},
  restoreSelection(_selState: any): void {},
};
const handler = {};
const selectionCellsHandler = {
  getHandler(_cell: any): any {
    return handler;
  },
};
const geometry = {};

const container = document.createElement("div");

const graph = {
  model,
  autoSizeCell(_cells: any[], _mode: boolean): void {},
  toggleCellStyles(_key: string, _defaultValue: any): void {},
  updateLabelElements(_cells: any, _fn: any): void {},
  container,
  view,
  cellEditor,
  selectionCellsHandler,
  selectNode(_node: any) {},
  pasteHtmlAtCaret(_caret: any) {},
  getSelectionCells(): any {
    [cell];
  },
  getCellGeometry(_cell: any): any {
    return geometry;
  },
  updateMouseEvent(_evt: any): void {},
  getParentByName(_name: string, _tagName?: string): any {
    return parent;
  },
  isSelectionEmpty(): boolean {
    return true;
  },
  getSelectionCount(): number {
    return 1;
  },
  isSwimlane(_cell: any): boolean {
    return false;
  },
  popupMenuHandler,
  getView(): any {
    return view;
  },
  getSelectionCell(): any {
    return cell;
  },
  getModel(): any {
    return model;
  },
  stopEditing(_mode: boolean): void {},
  setCellStyles(_key: string, _newValue: any, _cells?: any[]): void {},
};
const editor = {
  graph,
};

const format = {};

export const editorUi = {
  documentMode: "x",
  format,
  editor: editor,
  actions: actions,
  currentMenu: {},
  currentMenuElt: {},
  fireEvent(_evt: any): void {},
  hideCurrentMenu(): void {},
  resetCurrentMenu(): void {},
  setCurrentMenu(_menu: any, _elt: any): void {},
  showDialog(
    _container: any,
    _width: number,
    _height: number,
    _a: boolean,
    _b: boolean
  ): void {},
  executeLayout(_fn: any) {},
};

export const menus = {};

export const mocks = {
  editorUi,
};
