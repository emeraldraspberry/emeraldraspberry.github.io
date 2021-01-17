import m from "../../_snowpack/pkg/mithril.js";

const Other = {
  view: (vnode) => {
    return m(
      "div",
      { id: "other" },
      m("h2", "other stuff.."),
      m(
        "div",
        m(
          "p",
          "I type programs and scripts with various tools. Sometimes for fun, sometimes for practice."
        ),
        m("p", "Current list of tools I use:"),
        m(
          "ul",
          m("li", "Vue.js 3 + Vue Router"),
          m("li", "Electron"),
          m("li", "Node.js"),
          m("li", "Wave UI"),
          m("li", "SCSS"),
          m("li", "Webpack"),
          m("li", "Mithril"),
          m("li", "Snowpack"),
          m("li", "Userscript")
        ),
        m("p", "Not currently using but dealt with:"),
        m(
          "ul",
          m("li", "Angular Typescript"),
          m("li", "jQuery"),
          m("li", "PyQt5"),
          m("li", "C OpenGL")
        )
      )
    );
  },
};

export default Other;
