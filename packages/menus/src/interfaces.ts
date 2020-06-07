interface ICellEditor {
  textarea: HTMLElement;
  isContentEditing(): boolean;
  saveSelection(): void;
  restoreSelection(selState: any): void;
}

interface IPopupMenuHandler {
  hideMenu(): void;
}

interface IView {
  getState(cell: any): any;
}

interface IModel {
  getChildCount(cells: any): number;
}

interface SelectionCellsHandler {
  getHandler(cell: any): any;
}

export interface IGraph {
  container: HTMLElement;
  view: IView;
  cellEditor: ICellEditor;
  selectionCellsHandler: SelectionCellsHandler;
  model: IModel;
  pasteHtmlAtCaret(_caret: any): void;
  autoSizeCell(cells: any[], mode: boolean): void;
  toggleCellStyles(key: string, defaultValue: any): void;
  updateLabelElements(cells: any, fn: any): void;
  getSelectionCells(): any;
  selectNode(_node: any): void;
  getCellGeometry(cell: any): any;
  updateMouseEvent(evt: any): void;
  getParentByName(name: string, tagName?: string): any;
  isSelectionEmpty(): boolean;
  getSelectionCount(): number;
  isSwimlane(cell: any): boolean;
  popupMenuHandler: IPopupMenuHandler;
  getView(): any;
  getSelectionCell(): any;
  getModel(): any;
  stopEditing(mode: boolean): void;
  setCellStyles(key: string, newValue: any, cells?: any[]): void;
}

export interface IEditor {
  graph: IGraph;
}

interface IActions {
  getAction(key: string): any;
}

interface IFormat {}

export interface IEditorUI {
  format: IFormat;
  editor: IEditor;
  actions: IActions;
  currentMenu: any;
  currentMenuElt: any;
  fireEvent(evt: any): void;
  hideCurrentMenu(): void;
  resetCurrentMenu(): void;
  setCurrentMenu(menu: any, elt: any): void;
  showDialog(
    container: any,
    width: number,
    height: number,
    a: boolean,
    b: boolean
  ): void;
  executeLayout(_fn: any, mode: boolean): void;
}
