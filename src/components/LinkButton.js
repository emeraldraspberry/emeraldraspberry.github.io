import m from "mithril";

const LinkButton = {
  view: (vnode) => {
    return m(
      "div",
      { id: "link-button" },
      m("a", { href: vnode.attrs.link }, vnode.attrs.text)
    );
  },
};

export default LinkButton;
