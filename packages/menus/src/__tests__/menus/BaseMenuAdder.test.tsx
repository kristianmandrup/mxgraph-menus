import { BaseMenuAdder } from "../..";
import { editorUi } from "../mocks";

describe("Menus", () => {
  const create = () => new BaseMenuAdder(editorUi);

  describe("instance", () => {
    const menus = {
      layers: {
        name: "layers",
      },
    };

    let adder;
    beforeEach(() => {
      adder = create();
    });

    describe("properties", () => {
      editorUi;
      menus;
    });

    describe("methods", () => {
      const label = "layers";

      describe("#get", () => {
        it("gets named menu ", () => {
          expect(adder.get(label)).toEqual(menus.layers);
        });
      });

      describe("#put", () => {
        it("gets named menu ", () => {
          const xmenu = {
            name: "xx",
          };
          adder.put("x", xmenu);
          expect(adder.get("x")).toEqual(xmenu);
        });
      });
    });
  });
});
