import { Menubar } from "../menubar/Menubar";
import React, {
  // createRef,
  useRef,
} from "react";
import { editorUi } from "./mocks";

export const MenubarComponent = () => {
  const containerRef = useRef(null);
  if (containerRef) {
    // console.log({ containerRef });
    const container = containerRef.current;
    // console.log({ container });
    if (container) {
      const menubar = new Menubar(editorUi, container);
      menubar.addMenu("x", () => {});
    } else {
      // console.log("no container");
    }
  }
  // menubar.addMenuHandler(container, () => {});

  return <div ref={containerRef}></div>;
};
