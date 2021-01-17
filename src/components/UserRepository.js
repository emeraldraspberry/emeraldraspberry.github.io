import m from "mithril";
import LinkButton from "./LinkButton.js";
import RepoTag from "./RepoTag.js";

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
      m("h2", UserRepository.name),
      m(
        "div",
        { class: "tag-container" },
        UserRepository.language
          ? m(RepoTag, { text: "Language: " + UserRepository.language })
          : null
      ),
      UserRepository.description ? m("p", UserRepository.description) : null,
      m(
        "div",
        { class: "button-container" },
        m(LinkButton, { link: UserRepository.htmlUrl, text: "View" }),
        m(LinkButton, { text: "See README" })
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
