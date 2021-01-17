import m from "mithril";

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
        m("ul", m("li", m("a", "Home")), m("li", m("a", "Other Stuff")))
      ),
      m(
        "footer",
        "Copyright @ 2021 | Powered by Mithril, built with Snowpack | Formerly by jQuery and non-framework architecture"
      )
    );
  },
};

export default Sidebar;
