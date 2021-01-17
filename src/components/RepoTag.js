import m from "../../_snowpack/pkg/mithril.js";

const RepoTag = {
  view: (vnode) => {
    return m("div", { class: "repo-tag" }, vnode.attrs.text);
  },
};

export default RepoTag;
