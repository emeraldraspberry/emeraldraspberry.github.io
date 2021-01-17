import m from "mithril";

const UserRepository = {
  name: String,
  htmlUrl: String,
  description: String,
  fork: Boolean,
  language: String,
  view: (vnode) => {
    return m(
      "div",
      { id: "user-repository" },
      m(
        "a",
        { href: UserRepository.htmlUrl },
        m("h2", UserRepository.name),
        m("p", UserRepository.description),
        m("p", "Language: " + UserRepository.language)
      )
    );
  },
  oninit: (vnode) => {
    UserRepository.name = vnode.attrs.name;
    UserRepository.htmlUrl = vnode.attrs.htmlUrl;
    UserRepository.description = vnode.attrs.description;
    UserRepository.fork = vnode.attrs.fork;
    UserRepository.language = vnode.attrs.language;
  },
};

export default UserRepository;
