import { Menubar } from "../menubar/Menubar";
import React, {
  // createRef,
  useRef,
} from "react";
import { IEditorUI } from "../interfaces";
import { mocks } from "./mocks";

const editorUi: IEditorUI = mocks.editorUi;

export const MenubarComponent = () => {
  const container = useRef(null);
  const menubar = new Menubar(editorUi, container);
  menubar.addMenu("x", () => {});
  // menubar.addMenuHandler(container, () => {});

  return <div ref={container}></div>;
};
