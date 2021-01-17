import m from "../../_snowpack/pkg/mithril.js";

const Sidebar = {
  view: (vnode) => {
    return m(
      "aside",
      {
        id: "sidebar",
      },
      m("h1", { id: "username" }, "EmeraldRaspberry"),
      m(
        "div",
        { id: "avatar-container" },
        m("img", { src: "https://github.com/emeraldraspberry.png" })
      ),
      m(
        "nav",
        m(
          "ul",
          m("li", m(m.route.Link, { href: "/home" }, "Home")),
          m("li", m(m.route.Link, { href: "/other" }, "Other Stuff")),
          m(
            "li",
            m("a", { href: "https://github.com/emeraldraspberry" }, "GitHub")
          ),
          m(
            "li",
            m(
              "a",
              { href: "https://soundcloud.com/user-621787582" },
              "SoundCloud"
            )
          ),
          m(
            "li",
            m(
              "a",
              { href: "https://old.reddit.com/u/EmeraldRaspberry" },
              "Reddit"
            )
          )
        )
      ),
      m(
        "footer",
        "Copyright @ 2021 | Powered by Mithril, built with Snowpack | Formerly by jQuery and non-framework architecture"
      )
    );
  },
};

export default Sidebar;
