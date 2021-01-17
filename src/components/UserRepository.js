import m from "mithril";

const UserRepository = {
  repoName: "",
  url: "",
  description: "",
  fork: false,
  language: "",
  view: (vnode) => {
    return m("div", { id: "user-repository" }, vnode.attrs.name);
  },
};

export default UserRepository;
