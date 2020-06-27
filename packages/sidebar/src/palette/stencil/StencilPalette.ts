import { AbstractPalette } from "../AbstractPalette";
import { StencilIndexLoader } from "./StencilIndexLoader";
import { StencilDefaultLoader } from "./StencilDefaultLoader";
import { Sidebar } from "../../Sidebar";

export class StencilPalette extends AbstractPalette {
  addStencilsToIndex: any; // fn

  stencilIndexLoader: StencilIndexLoader;
  stencilDefaultLoader: StencilDefaultLoader;

  constructor(sidebar: Sidebar) {
    super(sidebar);
    this.addStencilsToIndex = sidebar.addStencilsToIndex;
    this.stencilIndexLoader = new StencilIndexLoader(sidebar);
    this.stencilDefaultLoader = new StencilDefaultLoader(sidebar);
  }

  filterTags(tags) {
    return this.sidebar.filterTags(tags);
  }

  /**
   * Adds the given stencil palette.
   */
  create(
    id,
    title,
    stencilFile,
    style,
    ignore?,
    onInit?,
    scale?,
    tags?,
    customFns: any[] = []
  ) {
    scale = scale != null ? scale : 1;

    const opts: any = {
      id,
      title,
      stencilFile,
      style,
      ignore,
      onInit,
      scale,
      tags,
      customFns,
    };

    if (this.addStencilsToIndex) {
      this.stencilIndexLoader.load(opts);
    } else {
      this.stencilDefaultLoader.load(opts);
    }
  }
}
