import m from "mithril";

const Other = {
  view: (vnode) => {
    return m(
      "div",
      { id: "other" },
      m("h2", "other stuff.."),
      m("p", "I type programs and scripts with various tools.")
    );
  },
};

export default Other;
