import m from "mithril";
import LinkButton from "./LinkButton.js";
import RepoTag from "./RepoTag.js";

const UserRepository = {
  view: (vnode) => {
    return m(
      "div",
      { id: "user-repository" },
      m("h2", vnode.attrs.name),
      m(
        "div",
        { class: "tag-container" },
        vnode.attrs.language
          ? m(RepoTag, { text: "Language: " + vnode.attrs.language })
          : null
      ),
      vnode.attrs.description ? m("p", vnode.attrs.description) : null,
      m(
        "div",
        { class: "button-container" },
        m(LinkButton, { link: vnode.attrs.htmlUrl, text: "View" })
      )
    );
  },
};

export default UserRepository;
