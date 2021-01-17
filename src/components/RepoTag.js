import m from "mithril";

const RepoTag = {
  view: (vnode) => {
    return m("div", { class: "repo-tag" }, vnode.attrs.text);
  },
};

export default RepoTag;
